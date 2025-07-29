/**
 * Data: Team data with proper asset URL handling
 * Purpose: Provide typed access to team data with correct image paths
 * Author: Oğuzhan Berke Özdil
 * Last edit: 28 July 2025
 */

import { buildAssetUrl } from '../config/site';
import teamDataRaw from '../content/team.json';

// Process team data to fix image paths
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rawTeamData = teamDataRaw as any;
export const teamData = {
  ...rawTeamData,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  team: rawTeamData.team?.map((member: any) => ({
    ...member,
    assets: {
      ...member.assets,
      photo: member.assets?.photo ? buildAssetUrl(member.assets.photo) : null
    }
  })) || []
};
