/**
 * A collection of {@link SpotColor} objects in a document.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link length}
 * ･ {@link parent}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 * ･ {@link add}
 * ･ {@link getByName}
 * ･ {@link index}
 * ･ {@link removeAll}
 *
 * @example
 * ➤ Removing spot colors
 *     // Deletes all spots colors from the current document
 *
 *     if (app.documents.length > 0) {
 *         var spotCount = app.activeDocument.spots.length;
 *         if (spotCount > 0) {
 *             app.activeDocument.spots.removeAll();
 *         }
 *     }
 *
 * @example
 * ➤ Creating and applying spot colors
 *     // Defines and applies a new spot color in the current document then applies the color to
 *     // the first path item
 *
 *     if (app.documents.length > 0 && app.activeDocument.pathItems.length > 0) {
 *         // Define the new color value
 *         newRGBColor = new RGBColor();
 *         newRGBColor.red = 255;
 *         newRGBColor.green = 0;
 *         newRGBColor.blue = 0;
 *
 *         // Create the new spot
 *         var newSpot = app.activeDocument.spots.add();
 *         // Define the new SpotColor as 80% of the RGB color
 *         newSpot.name = "Scripted Red spot";
 *         newSpot.tint = 80;
 *         newSpot.color = newRGBColor;
 *
 *         // Apply a 50% tint of the new spot color to the frontmost path item.
 *
 *         // Create a spotcolor object, set the tint value,
 *         var newSpotColor = new SpotColor();
 *         newSpotColor.spot = newSpot;
 *         newSpotColor.tint = 50;
 *         // Use the spot color to set the fill color
 *         var frontPath = app.activeDocument.pathItems[0];
 *         frontPath.filled = true;
 *         frontPath.fillColor = newSpotColor;
 *     }
 */
declare class Spots
{
	/**
	 * Read-only. The number of objects in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link Spots}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Object}
	 * @see {@link Spots}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Spots}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Creates a new object.
	 * @return {Spot} {@link Spot} object
	 * @see {@link Spots}
	 * @since CS2
	 * @version CS2
	 */
	add():Spot;

	/**
	 * Gets the first element in the collection with the specified name.
	 * @param {String} name {@link String}
	 * @return {Spot} {@link Spot} object
	 * @see {@link Spots}
	 * @since CS2
	 * @version CS2
	 */
	getByName(name:String):Spot;

	/**
	 * Gets an element from the collection.
	 * @param {String | Number} itemKey {@link String} or {@link Number}
	 * @return {Spot} {@link Spot} object
	 * @see {@link Spots}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):Spot;

	/**
	 * Deletes all elements in this collection.
	 * @see {@link Spots}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}