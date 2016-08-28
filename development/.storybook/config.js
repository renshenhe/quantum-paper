import { configure } from '@kadira/storybook';

function loadStories() {
  require('../lib/components/Button/stories/ButtonStory');
  require('../lib/components/Ruler/stories/RulerStory');
  require('../lib/components/SnackBar/stories/SnackBarStory');
  require('../lib/components/TabBar/stories/TabBarStory');
  require('../lib/components/CircularProgress/stories/CircularProgressStory');

}

configure(loadStories, module);