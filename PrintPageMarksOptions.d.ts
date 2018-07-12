/**
 * The options for printing page marks.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link bleedOffsetRect}
 * ･ {@link colorBars}
 * ･ {@link marksOffsetRect}
 * ･ {@link pageInfoMarks}
 * ･ {@link pageMarksType}
 * ･ {@link registrationMarks}
 * ･ {@link trimMarks}
 * ･ {@link trimMarksWeight}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Setting page mark printing options
 *     // Creates a PrintPageMarksOptions object, assigns it
 *     // to a PrintOptions object, then prints the current document.
 *
 *     var docRef = activeDocument;
 *     var pageMarkOptions = new PrintPageMarksOptions();
 *     var options = new PrintOptions();
 *     options.pageMarksOptions = pageMarkOptions;
 *
 *     pageMarkOptions.colorBars = true;
 *     pageMarkOptions.pageInfoMarks = true;
 *     pageMarkOptions.registrationMarks = true;
 *     pageMarkOptions.trimMarks = true;
 *     docRef.print(options);
 */
declare class PrintPageMarksOptions
{
	/**
	 * The bleed offset rectangle.
	 * @type {Number[]} array of 4 numbers
	 * @see {@link PrintPageMarksOptions}
	 * @since CS2
	 * @version CS2
	 */
	bleedOffsetRect:Number[];

	/**
	 * If <b>true</b>, enable printing of color bars. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PrintPageMarksOptions}
	 * @since CS2
	 * @version CS2
	 */
	colorBars:Boolean;

	/**
	 * The page marks offset rectangle.
	 * @type {Number[]} array of 4 numbers
	 * @see {@link PrintPageMarksOptions}
	 * @since CS2
	 * @version CS2
	 */
	marksOffsetRect:Number[];

	/**
	 * If <b>true</b>, page info marks printing is enabled. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PrintPageMarksOptions}
	 * @since CS2
	 * @version CS2
	 */
	pageInfoMarks:Boolean;

	/**
	 * The page marks style. Default: {@link PageMarksTypes.Roman}
	 * @type {PageMarksTypes}
	 * @see {@link PrintPageMarksOptions}
	 * @since CS2
	 * @version CS2
	 */
	pageMarksType:PageMarksTypes;

	/**
	 * If <b>true</b>, registration marks should be printed. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PrintPageMarksOptions}
	 * @since CS2
	 * @version CS2
	 */
	registrationMarks:Boolean;

	/**
	 * If <b>true</b>, trim marks should be printed. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PrintPageMarksOptions}
	 * @since CS2
	 * @version CS2
	 */
	trimMarks:Boolean;

	/**
	 * Stroke weight of trim marks. Minimum: 0.0 Default: 0.125
	 * @type {Number} double
	 * @see {@link PrintPageMarksOptions}
	 * @since CS2
	 * @version CS2
	 */
	trimMarksWeight:Number;

	/**
	 * Read-only. The class name of the object.
	 * @type {String}
	 * @see {@link PrintPageMarksOptions}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}