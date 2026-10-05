import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'wallpaintings',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Wall paintings and frescoes',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: '97d73f3c-2c54-52b7-ad17-cfda861be46b',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: null,
    dynasty: {
      item: 'd861eea4-5eaf-5a74-81c8-1ecb64d9a358',
      name: 'Umayyads',
    },
    timeline: {
      code: 'jo',
      id: 'jor',
      country: 'Jordan',
    },
    partner: {
      id: '33f89573-8b54-5c1a-86ba-1663e604740f',
      name: 'Jordan Archaeological Museum',
      city: 'Amman',
      country: 'Jordan',
      objects: 1,
    },
  },
})
