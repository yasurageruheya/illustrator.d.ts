/**
 * A custom color definition contained in a {@link SpotColor} object. All Illustrator documents contain the spot color [{@link ColorModel.REGISTRATIION}] which can be used to print to all plates of a separation.
 * If no properties are specified when creating a new spot, default values are provided. However, if specifying the color, you must use the same color space as the document, either CMYK or RGB. Otherwise, an error results. When created, the spot is inserted into the swatch palette at the end.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link color}
 * ･ {@link colorType}
 * ･ {@link name}
 * ･ {@link parent}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 * ･ {@link remove}
 *
 * @example
 * ➤ Creating a new spot color
 *     // Create a new spot color in the frontmost document
 *     if (app.documents.length > 0) {
 *         var doc = app.activeDocument;
 *         // Create the new spot
 *         var newSpot = doc.spots.add();
 *         // Define the new color value
 *         var newColor = new CMYKColor();
 *         newColor.cyan = 35;
 *         newColor.magenta = 0;
 *         newColor.yellow = 50;
 *         newColor.black = 0;
 *         // Define a new SpotColor with an 80% tint
 *         // of the new Spot's color. The spot color can then
 *         // be applied to an art item like any other color.
 *         newSpot.name = "Pea-Green";
 *         newSpot.colorType = ColorModel.SPOT;
 *         newSpot.color = newColor;
 *         var newSpotColor = new SpotColor();
 *         newSpotColor.spot = newSpot;
 *         newSpotColor.tint = 80;
 *         alert("Created " + newSpot.name + " " + newSpotColor.tint + "%");
 *     }
 */
declare class Spot
{
	/**
	 * The color information for this spot color.
	 * @type {Color} {@link Color} object
	 * @see {@link Spot}
	 * @since CS2
	 * @version CS2
	 */
	color:Color;

	/**
	 * The color model for this custom color.
	 * @type {ColorModel}
	 * @see {@link Spot}
	 * @since CS2
	 * @version CS2
	 */
	colorType:ColorModel;

	/**
	 * The spot color’s name.
	 * @type {String}
	 * @see {@link Spot}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * Read-only. The document that contains this spot color.
	 * @const
	 * @type {Document} {@link Document} object
	 * @see {@link Spot}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Document;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Spot}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Deletes this object.
	 * @see {@link Spot}
	 * @since CS2
	 * @version CS2
	 */
	remove():void;
}