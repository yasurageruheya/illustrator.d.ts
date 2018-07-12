/**
 * Contains information about all printing options including flattening, color management, coordinates, fonts, and paper.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link colorManagementOptions}
 * ･ {@link colorSeparationOptions}
 * ･ {@link coordinateOptions}
 * ･ {@link flattenerOptions}
 * ･ {@link flattenerPreset}
 * ･ {@link fontOptions}
 * ･ {@link jobOptions}
 * ･ {@link pageMarksOptions}
 * ･ {@link paperOptions}
 * ･ {@link postScriptOptions}
 * ･ {@link PPDName}
 * ･ {@link printerName}
 * ･ {@link printPreset}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Setting print options
 *     // PrintOptions
 *     // Create a variety of print options, assign to a PrintOptions object,
 *     // then print with those options
 *
 *     // Create a new document and add some symbol items
 *     var docRef = documents.add();
 *     var y = docRef.height - 30;
 *     for (var i = 0; i < 10; i++) {
 *         symbolRef = docRef.symbols[i];
 *         symbolItemRef1 = docRef.symbolItems.add(symbolRef);
 *         symbolItemRef1.top = y;
 *         symbolItemRef1.left = 100;
 *         y -= (symbolItemRef1.height + 10);
 *     }
 *     redraw();
 *
 *     // Create multiple options and assign to PrintOptions
 *     var options = new PrintOptions();
 *
 *     var colorOptions = new PrintColorManagementOptions();
 *     colorOptions.name = "ColorMatch RGB";
 *     colorOptions.intent = PrintColorIntent.SATURATIONINTENT;
 *     options.colorManagementOptions = colorOptions;
 *
 *     var printJobOptions = new PrintJobOptions();
 *     printJobOptions.designation = PrintArtworkDesignation.ALLLAYERS;
 *     printJobOptions.reverse = true;
 *     options.jobOptions = printJobOptions;
 *
 *     var coordinateOptions = new PrintCoordinateOptions();
 *     coordinateOptions.fitToMedia = true;
 *     options.coordinateOptions = coordinateOptions;
 *
 *     var flatOpts = new PrintFlattenerOptions();
 *     flatOpts.ClipComplexRegions = true;
 *     flatOpts.GradientResoultion = 60;
 *     flatOpts.RasterizatonResotion = 60;
 *     options.flattenerOptions = flatOpts;
 *
 *     // Print with options
 *     docRef.print(options);
 */
declare class PrintOptions
{
	/**
	 * The printing color management options.
	 * @type {PrintColorManagementOptions} {@link PrintColorManagementOptions} object
	 * @see {@link PrintOptions}
	 * @since CS2
	 * @version CS2
	 */
	colorManagementOptions:PrintColorManagementOptions;

	/**
	 * The printing color separation options.
	 * @type {PrintColorSeparationOptions} {@link PrintColorSeparationOptions} object
	 * @see {@link PrintOptions}
	 * @since CS2
	 * @version CS2
	 */
	colorSeparationOptions:PrintColorSeparationOptions;

	/**
	 * The printing coordinate options.
	 * @type {PrintCoordinateOptions} {@link PrintCoordinateOptions} object
	 * @see {@link PrintOptions}
	 * @since CS2
	 * @version CS2
	 */
	coordinateOptions:PrintCoordinateOptions;

	/**
	 * The printing flattener options.
	 * @type {PrintFlattenerOptions} {@link PrintFlattenerOptions} object
	 * @see {@link PrintOptions}
	 * @since CS2
	 * @version CS2
	 */
	flattenerOptions:PrintFlattenerOptions;

	/**
	 * The transparency flattener preset name.
	 * @type {String}
	 * @see {@link PrintOptions}
	 * @since CS2
	 * @version CS2
	 */
	flattenerPreset:String;

	/**
	 * The printing font options.
	 * @type {PrintFontOptions} {@link PrintFontOptions} object
	 * @see {@link PrintOptions}
	 * @since CS2
	 * @version CS2
	 */
	fontOptions:PrintFontOptions;

	/**
	 * The printing job options.
	 * @type {PrintJobOptions} {@link PrintJobOptions} object
	 * @see {@link PrintOptions}
	 * @since CS2
	 * @version CS2
	 */
	jobOptions:PrintJobOptions;

	/**
	 * The printing page marks options.
	 * @type {PrintPageMarksOptions} {@link PrintPageMarksOptions} object
	 * @see {@link PrintOptions}
	 * @since CS2
	 * @version CS2
	 */
	pageMarksOptions:PrintPageMarksOptions;

	/**
	 * The paper options.
	 * @type {PrintPaperOptions} {@link PrintPaperOptions} object
	 * @see {@link PrintOptions}
	 * @since CS2
	 * @version CS2
	 */
	paperOptions:PrintPaperOptions;

	/**
	 * The printing PostScript options.
	 * @type {PrintPostScriptOptions} {@link PrintPostScriptOptions} object
	 * @see {@link PrintOptions}
	 * @since CS2
	 * @version CS2
	 */
	postScriptOptions:PrintPostScriptOptions;

	/**
	 * The PPD name.
	 * @type {String}
	 * @see {@link PrintOptions}
	 * @since CS2
	 * @version CS2
	 */
	PPDName:String;

	/**
	 * The printer name.
	 * @type {String}
	 * @see {@link PrintOptions}
	 * @since CS2
	 * @version CS2
	 */
	printerName:String;

	/**
	 * The print style.
	 * @type {String}
	 * @see {@link PrintOptions}
	 * @since CS2
	 * @version CS2
	 */
	printPreset:String;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link PrintOptions}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}