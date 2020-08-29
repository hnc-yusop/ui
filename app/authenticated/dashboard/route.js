import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  scope: service(),

  redirect() {
    const to = get(this, 'scope.dashboardLink') + window.location.pathname.substr(1);

    // eslint-disable-next-line no-debugger
    debugger;

    window.location.href = to;
  }
});
