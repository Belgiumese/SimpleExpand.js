'use strict';

QUnit.test('Global api object exists', (assert) => {
  assert.ok(simpleExpand, 'typer object exists');
});

QUnit.test('Finds elements and adds unique ID', (assert) => {
  let fixture = $('#qunit-fixture'),
    iterations = 3;
  for (let i = 0; i < iterations; i++) {
    fixture.append('<p class="simpleExpand"></p>');
  }
  simpleExpand.init();
  let instances = $('.simpleExpand'),
    ids = [];
  assert.deepEqual(instances.length, iterations, `There should be ${iterations} instances of expand`);
  for (let i = 0; i < iterations; i++) {
    let id = parseInt(instances.eq(i).attr('data-expand-id'), 10);
    assert.ok(id < iterations, `ID should be exist and be between 0 and ${iterations - 1}`);
    assert.ok(!ids.includes(id), 'No duplicate IDs');
    ids.push(id);
  }
});

QUnit.test('Hides elements on initialisation', (assert) => {
  let fixture = $('#qunit-fixture');
  fixture.append('<div class="simpleExpand"><p>I am some content</p></div>');

  simpleExpand.init();
  assert.deepEqual($('.simpleExpand').outerHeight(), 0, 'Height should be 0 by default.');
});

QUnit.test('Unhides & hides elements when called', (assert) => {
  let fixture = $('#qunit-fixture');
  fixture.append('<div class="simpleExpand"><p>I am some content</p></div>');
  let content = $('.simpleExpand'),
    height = content.outerHeight();
  simpleExpand.settings({
    speed: 0
  }).init();

  simpleExpand.expand(content[0]);
  let done = assert.async();
  setTimeout(() => {
    assert.deepEqual(content.outerHeight(), height, 'Should be initial height when expanded');

    simpleExpand.expand(content[0]);
    setTimeout(() => {
      assert.deepEqual(content.outerHeight(), 0, 'Should be 0 height when shrunk');
      done();
    }, 0);
  }, 0);
});

QUnit.test('isExpanded() returns correct value', (assert) => {
  let fixture = $('#qunit-fixture');
  fixture.append('<div class="simpleExpand"><p>I am some content</p></div>');
  let content = $('.simpleExpand');
  simpleExpand.settings({
    speed: 0
  }).init();

  assert.deepEqual(simpleExpand.isExpanded(content[0]), false, 'Should be false on init');

  simpleExpand.expand(content[0]);
  let done = assert.async();
  setTimeout(() => {
    assert.deepEqual(simpleExpand.isExpanded(content[0]), true, 'Should be true when expanded');
    done();
  }, 20);
});

QUnit.test('settings() works correctly', (assert) => {
  let fixture = $('#qunit-fixture');
  fixture.append('<div class="simpleExpand"><p>I am some content</p></div>');
  let content = $('.simpleExpand');
  simpleExpand.settings({
    speed: 10
  }).init();

  simpleExpand.expand(content[0]);
  let done = assert.async();
  setTimeout(() => {
    assert.deepEqual(simpleExpand.isExpanded(content[0]), true, 'Should have finished expanding');
    done();
  }, 20);
});