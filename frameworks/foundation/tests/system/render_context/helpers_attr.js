// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2009 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2009 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

/*global module test equals context ok same same */

var context = null;



// ..........................................................
// attr
// 
module("SC.RenderContext#attr", {
  setup: function() {
    context = SC.RenderContext().attr({ foo: 'foo' }) ;
  }
});

test("should add passed name to value", function() {
  context.attr('bar', 'bar');
  equals(context._attrs.bar, 'bar', 'verify attr name');
});

test("should replace passed name  value in attrs", function() {
  context.attr('foo', 'bar');
  equals(context._attrs.foo, 'bar', 'verify attr name');
});

test("should return receiver", function() {
  equals(context, context.attr('foo', 'bar'));
});

test("should create attrs hash if needed", function() {
  context = SC.RenderContext().begin();
  equals(context._attrs, null, 'precondition - has no attrs');
  
  context.attr('foo', 'bar');
  equals(context._attrs.foo, 'bar', 'has styles');
});

test("should assign all attrs if a hash is passed", function() {
  context.attr({ foo: 'bar', bar: 'bar' });
  same(context._attrs, { foo: 'bar', bar: 'bar' }, 'has same styles');
});
 

