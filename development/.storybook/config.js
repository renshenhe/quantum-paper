import { configure } from '@kadira/storybook';

function loadStories() {
  require('../lib/components/Button/stories/ButtonStory');
  require('../lib/components/Ruler/stories/RulerStory');
  require('../lib/components/SnackBar/stories/SnackBarStory');
  require('../lib/components/TabBar/stories/TabBarStory');
  require('../lib/components/CircularProgress/stories/CircularProgressStory');
  require('../lib/components/Animations/stories/AnimationStory');
  require('../lib/components/Table/stories/TableStory');
  require('../lib/components/ProgressBar/stories/ProgressBarStory');
  require('../lib/components/SpecTable/stories/SpecTableStory');
  require('../lib/components/TextField/stories/TextFieldStory');
  require('../lib/components/Menu/stories/MenuStory');
  require('../lib/components/Drawer/stories/DrawerStory');


}

configure(loadStories, module);