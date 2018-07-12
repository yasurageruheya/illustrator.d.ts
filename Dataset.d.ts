/**
 * A set of data used for dynamic publishing. A dataset allows you to collect a number of variables and their dynamic data into one object. You must have at least one variable bound to an art item in order to create a dataset. See the class {@link Variable}.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link name}
 * ･ {@link parent}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 * ･ {@link display}
 * ･ {@link remove}
 * ･ {@link update}
 *
 * @example
 * ➤ Using variables and datasets
 *     // Creates two variables, 1 visibility and 1 text,
 *     // creates two datasets each with different values
 *     // for the variables, then displays both datasets
 *
 *     var docRef = documents.add();
 *
 *     // Create visibility variable
 *     var itemRef = docRef.pathItems.rectangle(600, 200, 150, 150);
 *     var colorRef = new RGBColor;
 *     colorRef.red = 255;
 *     itemRef.fillColor = colorRef;
 *     var visibilityVar = docRef.variables.add();
 *     visibilityVar.kind = VariableKind.VISIBILITY;
 *     itemRef.visibilityVariable = visibilityVar;
 *
 *     // Create text variable
 *     var textRef = docRef.textFrames.add();
 *     textRef.contents = "Text Variable, dataset 1";
 *     textRef.top = 400;
 *     textRef.left = 200;
 *     var textVar = docRef.variables.add();
 *     textVar.kind = VariableKind.TEXTUAL;
 *     textRef.contentVariable = textVar;
 *     redraw();
 *
 *     // Create dataset 1
 *     var ds1 = docRef.dataSets.add();
 *
 *     // Change variable values and create dataset 2
 *     itemRef.hidden = true;
 *     textRef.contents = "Text Variable, dataset 2";
 *     redraw();
 *     var ds2 = docRef.dataSets.add();
 *
 *     // display each dataset
 *     ds1.display();
 *     redraw();
 *     ds2.display();
 *     redraw();
 */
declare class Dataset
{
	/**
	 * Then name of the dataset.
	 * @type {String}
	 * @see {@link Dataset}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * Read-only. The name of the object that contains this dataset.
	 * @const
	 * @type {Document} {@link Document} object
	 * @see {@link Dataset}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Document;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Dataset}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Displays the dataset.
	 * @see {@link Dataset}
	 * @since CS2
	 * @version CS2
	 */
	display():void;

	/**
	 * Deletes this object.
	 * @see {@link Dataset}
	 * @since CS2
	 * @version CS2
	 */
	remove():void;

	/**
	 * Updates the dataset.
	 * @see {@link Dataset}
	 * @since CS2
	 * @version CS2
	 */
	update():void;
}