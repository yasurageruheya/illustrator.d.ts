/**
 * {@link Ink} information for printing a document.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link angle}
 * ･ {@link customColor}
 * ･ {@link density}
 * ･ {@link dotShape}
 * ･ {@link frequency}
 * ･ {@link kind}
 * ･ {@link printingStatus}
 * ･ {@link trapping}
 * ･ {@link trappingOrder}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Getting ink information
 *     // Displays the current documents inks in a text frame
 *
 *     var docRef = documents.add();
 *     var textRef = docRef.textFrames.add();
 *
 *     // assemble a string of the inks in this document
 *     var sInks = "";
 *     var iLength = activeDocument.inkList.length;
 *
 *     for (var i = 0; i < iLength; i++) {
 *         sInks += docRef.inkList[i].name;
 *         sInks += "\r\t";
 *         sInks += "Frequency = " + docRef.inkList[i].inkInfo.frequency;
 *         sInks += "\r\t";
 *         sInks += "Density = " + docRef.inkList[i].inkInfo.density;
 *         sInks += "\r";
 *     }
 *     textRef.contents = sInks;
 *     textRef.top = 600;
 *     textRef.left = 200;
 *     redraw();
 */
declare class InkInfo
{
	/**
	 * The ink’s screen angle in degrees. Range: <b>-360 to 360</b>
	 * @type {Number} double
	 * @see {@link InkInfo}
	 * @since CS2
	 * @version CS2
	 */
	angle:Number;

	/**
	 * The color of the custom ink.
	 * @type {Color} {@link Color} object
	 * @see {@link InkInfo}
	 * @since CS2
	 * @version CS2
	 */
	customColor:Color;

	/**
	 * The neutral density. Minimum: <b>0.0</b>
	 * @type {Number} double
	 * @see {@link InkInfo}
	 * @since CS2
	 * @version CS2
	 */
	density:Number;

	/**
	 * The dot shape name.
	 * @type {String}
	 * @see {@link InkInfo}
	 * @since CS2
	 * @version CS2
	 */
	dotShape:String;

	/**
	 * The ink’s frequency. Range: <b>0.0 to 1000.0</b>
	 * @type {Number} double
	 * @see {@link InkInfo}
	 * @since CS2
	 * @version CS2
	 */
	frequency:Number;

	/**
	 * The ink type.
	 * @type {InkType}
	 * @see {@link InkInfo}
	 * @since CS2
	 * @version CS2
	 */
	kind:InkType;

	/**
	 * The ink printing status.
	 * @type {InkPrintStatus}
	 * @see {@link InkInfo}
	 * @since CS2
	 * @version CS2
	 */
	printingStatus:InkPrintStatus;

	/**
	 * The trapping type.
	 * @type {TrappingType}
	 * @see {@link InkInfo}
	 * @since CS2
	 * @version CS2
	 */
	trapping:TrappingType;

	/**
	 * The order of trapping for the ink. Range: <b>1 to 4</b> for CMYK
	 * @type {Number} long
	 * @see {@link InkInfo}
	 * @since CS2
	 * @version CS2
	 */
	trappingOrder:Number;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link InkInfo}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}