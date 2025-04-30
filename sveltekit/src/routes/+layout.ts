import ls from '@livesession/browser'
import { browser } from '$app/environment';

export const load = async () => {
  if (browser) {
    ls.init(import.meta.env.VITE_LIVESESSION_TRACK_ID)
    ls.newPageView()
  }
  return
};