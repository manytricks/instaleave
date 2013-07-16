// Copyright © 2013 Many Tricks (When in doubt, consider this MIT-licensed)

var theBeforeUnloadFunction = window.onbeforeunload;
if (theBeforeUnloadFunction) {
	window.onbeforeunload = function (theEvent) {
		theBeforeUnloadFunction(theEvent);
		return null;
	};
}