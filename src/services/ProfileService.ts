/* eslint class-methods-use-this: [
  "error", { "exceptMethods": [
    "followAutor",
    'unfollowAutor',
  ] }] */

import { Author } from '@/models';
import BaseService from './BaseService';

export default class ProfileService extends BaseService {
  constructor() {
    super('profiles');
  }

  async followAutor(username: string) {
    const profileService = new ProfileService();
    await profileService.post('', `${username}/follow`);
  }

  async unfollowAutor(username: string) {
    const profileService = new ProfileService();
    await profileService.delete('', `${username}/follow`);
  }
}
