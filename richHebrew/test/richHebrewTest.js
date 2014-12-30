QUnit.test( "NamespaceTest", function( assert ) {
  assert.ok( typeof com != "undefined", "com must be defined" );
  assert.ok( typeof com.leokom != "undefined", "com.leokom must be defined" );
  assert.ok( typeof com.leokom.richHebrew != "undefined", "com.leokom.richHebrew must be defined" );
});