/**
 * Contains flattening options for use when Illustrator outputs artwork that contains transparency into a non-native format.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link clipComplexRegions}
 * ･ {@link convertStrokesToOutlines}
 * ･ {@link convertTextToOutlines}
 * ･ {@link flatteningBalance}
 * ･ {@link gradientResolution}
 * ･ {@link overprint}
 * ･ {@link rasterizationResolution}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Setting print flattening
 *     // Print the current documemt with a range of flattener balance settings.
 *
 *     // Create PrintFlattenerOptions object and assign to a PrintOptions object
 *     var flatOpts = new PrintFlattenerOptions();
 *     var printOpts = new PrintOptions();
 *     printOpts.flattenerOptions = flatOpts;
 *     // Set other print options
 *     printOpts.ClipComplexRegions = true;
 *     printOpts.GradientResoultion = 360;
 *     printOpts.RasterizatonResotion = 360;
 *
 *     // Print the current document with flattening balance increments of 20
 *     var i;
 *     for (i = 0; i <= 100; i += 20) {
 *         flatOpts.flatteningBalance = i;
 *         activeDocument.print(printOpts);
 *     }
 */
declare class PrintFlattenerOptions
{
	/**
	 * If <b>true</b>, complex regions should be clipped. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PrintFlattenerOptions}
	 * @since CS2
	 * @version CS2
	 */
	clipComplexRegions:Boolean;

	/**
	 * If <b>true</b>, convert all strokes to outlines. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PrintFlattenerOptions}
	 * @since CS2
	 * @version CS2
	 */
	convertStrokesToOutlines:Boolean;

	/**
	 * If <b>true</b>, convert all text to outlines. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PrintFlattenerOptions}
	 * @since CS2
	 * @version CS2
	 */
	convertTextToOutlines:Boolean;

	/**
	 * The flattening balance. Range: 0.0 to 100.0. Default: 100.0
	 * @type {Number} long
	 * @see {@link PrintFlattenerOptions}
	 * @since CS2
	 * @version CS2
	 */
	flatteningBalance:Number;

	/**
	 * The gradient resolution in dots per inch (dpi). Range: 1.0 to 9600.0 Default: 300.0
	 * @type {Number} double
	 * @see {@link PrintFlattenerOptions}
	 * @since CS2
	 * @version CS2
	 */
	gradientResolution:Number;

	/**
	 * Whether to preserve, discard, or simulate overprinting. Default: {@link PDFOverprint.PRESERVEPDFOVERPRINT}
	 * @type {PDFOverprint}
	 * @see {@link PrintFlattenerOptions}
	 * @since CS2
	 * @version CS2
	 */
	overprint:PDFOverprint;

	/**
	 * The rasterization resolution in dots per inch (dpi). Range: 1.0 to 9600.0 Default: 300.0
	 * @type {Number} double
	 * @see {@link PrintFlattenerOptions}
	 * @since CS2
	 * @version CS2
	 */
	rasterizationResolution:Number;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link PrintFlattenerOptions}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}