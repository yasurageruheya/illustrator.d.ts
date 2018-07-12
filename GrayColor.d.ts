/**
 * A grayscale color specification, used where a {@link Color} object is required.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link gray}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Changing a color to gray
 *     // Sets the color of the first word in the active document
 *     // to a shade of gray
 *
 *     if (app.documents.length > 0 && app.activeDocument.textFrames.length > 0) {
 *         var text = app.activeDocument.textFrames[0].textRange;
 *         var firstWord = text.words[0];
 *
 *         // Create the new color
 *         var textColor = new GrayColor();
 *         textColor.gray = 45;
 *         firstWord.filled = true;
 *         firstWord.fillColor = textColor;
 *     }
 */
declare class GrayColor extends Color
{
	/**
	 * The tint of the gray. Range: <b>0.0 to 100.0,</b> where 0.0 is black and 100.0 is white.
	 * @type {Number} double
	 * @see {@link GrayColor}
	 * @since CS2
	 * @version CS2
	 */
	gray:Number;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link GrayColor}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}