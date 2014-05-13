// Copyright © 2013 Many Tricks (When in doubt, consider this MIT-licensed)

var canCallOriginalBeforeUnloadFunction = true;

function silenceBeforeUnloadFunction(callBeforeUnloadFunction) {
	var theOriginalBeforeUnloadFunction = window.onbeforeunload;
	if (theOriginalBeforeUnloadFunction) {
		var theReplacementBeforeUnloadFunction = function (theEvent) {
			if (canCallOriginalBeforeUnloadFunction) {
				theOriginalBeforeUnloadFunction(theEvent);
				canCallOriginalBeforeUnloadFunction = false;
			}
			return null;
		};
		if (callBeforeUnloadFunction) {
			theReplacementBeforeUnloadFunction();
		} else {
			window.onbeforeunload = theReplacementBeforeUnloadFunction;
		}
	}
}

silenceBeforeUnloadFunction(false);
window.addEventListener('beforeunload', function (theEvent) {
	silenceBeforeUnloadFunction(true);
	theEvent.stopPropagation();
}, true);
