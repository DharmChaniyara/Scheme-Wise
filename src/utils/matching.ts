import { Scheme, BusinessProfile } from '../types';

export interface MatchResult {
  scheme: Scheme;
  score: number;
  label: 'Highly Relevant' | 'Good Match' | 'Potential Match' | 'Explore';
  reasons: string[];
}

export function calculateMatchScore(profile: BusinessProfile, scheme: Scheme): MatchResult {
  let score = 0;
  const reasons: string[] = [];

  // 1. Industry Match (25 points)
  if (scheme.industries.includes(profile.industry) || scheme.industries.includes('All') || scheme.industries.includes('Other')) {
    score += 25;
    reasons.push(`Supports the ${profile.industry} industry`);
  }

  // 2. Business Type Match (20 points)
  if (scheme.businessTypes.includes(profile.businessType) || scheme.businessTypes.includes('All')) {
    score += 20;
    reasons.push(`Applicable to ${profile.businessType}s`);
  }

  // 3. Business Stage Match (20 points)
  if (scheme.businessStages.includes(profile.businessStage) || scheme.businessStages.includes('All')) {
    score += 20;
    reasons.push(`Aligns with your current business stage (${profile.businessStage})`);
  }

  // 4. State/Location Match (15 points)
  if (scheme.states.includes('All') || scheme.states.includes(profile.state)) {
    score += 15;
    if (!scheme.states.includes('All')) {
      reasons.push(`Specific to your state (${profile.state})`);
    } else {
      reasons.push(`Available nationwide`);
    }
  }

  // 5. Requirements Match (20 points)
  let requirementMatched = false;
  for (const req of profile.requirements) {
    if (scheme.category.includes(req)) {
      requirementMatched = true;
      break;
    }
  }
  
  // If the user selected 'Other' and the scheme has 'Other' or we can't strongly match, we give partial points
  if (requirementMatched) {
    score += 20;
    reasons.push(`Provides the specific support you requested`);
  } else if (profile.requirements.length === 0) {
    // Don't penalize if they didn't select any requirements
    score += 10; 
  }

  // Cap score at 100
  score = Math.min(score, 100);

  // Determine Label
  let label: MatchResult['label'] = 'Explore';
  if (score >= 90) label = 'Highly Relevant';
  else if (score >= 70) label = 'Good Match';
  else if (score >= 50) label = 'Potential Match';

  return {
    scheme,
    score,
    label,
    reasons
  };
}

export function getRecommendations(profile: BusinessProfile, schemes: Scheme[]): MatchResult[] {
  const results = schemes.map(scheme => calculateMatchScore(profile, scheme));
  
  // Sort by score descending
  return results.sort((a, b) => b.score - a.score);
}
