import { module, test } from 'qunit';
import { setupTest } from 'speech-synthesis-frontend/tests/helpers';

module('Unit | Service | modal', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:modal');
    assert.ok(service);
  });
});
