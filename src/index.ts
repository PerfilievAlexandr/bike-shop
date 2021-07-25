import { appConfig } from 'config/app';

import app from './app';

app.listen(appConfig.PORT, () => {
  console.log(`Listening on port ${appConfig.PORT}`);
});
