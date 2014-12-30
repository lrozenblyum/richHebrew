QUnit.test( "NamespaceTest", function( assert ) {
  assert.ok( typeof com != "undefined", "com must be defined" );
  assert.ok( typeof com.leokom != "undefined", "com.leokom must be defined" );
  assert.ok( typeof com.leokom.richHebrew != "undefined", "com.leokom.richHebrew must be defined" );
});

QUnit.test( "emptyContainerNotChanged", function( assert ) {
	var $ = document.getElementById;
	
	var fixture = $( "qunit-fixture" );
	fixture.innerHTML = "<div id = 'emptyContainer'></div>";
	
	com.leokom.richHebrew.enrich( $( "emptyContainer" ) );
	
	assert.equal( $( "emptyContainer" ).innerHTML, "" );
});