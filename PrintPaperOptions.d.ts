/**
 * Information about the paper to be used in the print job.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link height}
 * ･ {@link name}
 * ･ {@link offset}
 * ･ {@link transverse}
 * ･ {@link typename}
 * ･ {@link width}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Setting print paper options
 *     // Creates a new document, adds a path item, applies a graphic style
 *     // then prints with specified paper options
 *
 *     var docRef = documents.add();
 *     var pathRef = docRef.pathItems.rectangle(600, 200, 200, 200);
 *     docRef.graphicStyles[1].applyTo(pathRef);
 *
 *     var paperOpts = new PrintPaperOptions;
 *     var printOpts = new PrintOptions;
 *     printOpts.paperOptions = paperOpts;
 *
 *     var printerCount = printerList.length;
 *     if (printerCount > 0) {
 *         // Print with the 1st paper from the 1st printer
 *         for (var i = 0; i < printerList.length; i++)
 *             if (printerList[i].printerInfo.paperSizes.length > 0) var printerRef = printerList[i];
 *         var paperRef = printerRef.printerInfo.paperSizes[0];
 *         if (printerRef.printerInfo.paperSizes.length > 0) {
 *             paperOpts.name = paperRef.name;
 *             printOpts.printerName = printerRef.name;
 *
 *             docRef.print(printOpts);
 *         }
 *     }
 */
declare class PrintPaperOptions
{
	/**
	 * The custom height (in points) for using the custom paper. Default: <b>0.0</b>
	 * @type {Number} double
	 * @see {@link PrintPaperOptions}
	 * @since CS2
	 * @version CS2
	 */
	height:Number;

	/**
	 * The paper’s name.
	 * @type {String}
	 * @see {@link PrintPaperOptions}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * Custom offset (in points) for using the custom paper. Default: <b>0.0</b>
	 * @type {Number} double
	 * @see {@link PrintPaperOptions}
	 * @since CS2
	 * @version CS2
	 */
	offset:Number;

	/**
	 * If <b>true</b>, transverse the artwork (rotate 90 degrees) on the custom paper. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PrintPaperOptions}
	 * @since CS2
	 * @version CS2
	 */
	transverse:Boolean;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link PrintPaperOptions}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * The custom width (in points) for using the custom paper. Default: <b>0.0</b>
	 * @type {Number} double
	 * @see {@link PrintPaperOptions}
	 * @since CS2
	 * @version CS2
	 */
	width:Number;
}