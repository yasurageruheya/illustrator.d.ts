/**
 * Information about the color separations to be used in printing the document.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link colorSeparationMode}
 * ･ {@link convertSpotColors}
 * ･ {@link inkList}
 * ･ {@link overPrintBlack}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Managing color separations for printing
 *     // PrintColorSeparationOptions
 *     // Create some simple artwork (symbol items) on a
 *     // new document and print it with various separation options.
 *
 *     // Add some symbol items to a new document
 *     var docRef = documents.add();
 *     var y = docRef.height - 30;
 *     for (var i = 0; i < 10; i++) {
 *         symbolRef = docRef.symbols[i];
 *         symbolItemRef1 = docRef.symbolItems.add(symbolRef);
 *         symbolItemRef1.top = y;
 *         symbolItemRef1.left = 100;
 *         y -= (symbolItemRef1.height + 10);
 *     }
 *     // Print with various separation options
 *     var sepOptions = new PrintColorSeparationOptions();
 *     var options = new PrintOptions();
 *     options.colorSeparationOptions = sepOptions;
 *
 *     sepOptions.convertSpotColors = true;
 *     sepOptions.overPrintBlack = true;
 *     sepOptions.colorSeparationMode = PrintColorSeparationMode.COMPOSITE;
 *     docRef.print(options);
 *
 *     sepOptions.colorSeparationMode = PrintColorSeparationMode.INRIPSEPARATION;
 *     docRef.print(options);
 *
 *     sepOptions.convertSpotColors = false;
 *     sepOptions.overPrintBlack = false;
 *     sepOptions.colorSeparationMode = PrintColorSeparationMode.HOSTBASEDSEPARATION;
 *     docRef.print(options);
 */
declare class PrintColorSeparationOptions
{
	/**
	 * The color separation type. Default: {@link PrintColorSeparationMode.COMPOSITE}
	 * @type {PrintColorSeparationMode}
	 * @see {@link PrintColorSeparationOptions}
	 * @since CS2
	 * @version CS2
	 */
	colorSeparationMode:PrintColorSeparationMode;

	/**
	 * If <b>true</b>, all spot colors should be converted to process colors. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PrintColorSeparationOptions}
	 * @since CS2
	 * @version CS2
	 */
	convertSpotColors:Boolean;

	/**
	 * The list of inks for color separation.
	 * @type {Ink[]} array of {@link Ink} objects
	 * @see {@link PrintColorSeparationOptions}
	 * @since CS2
	 * @version CS2
	 */
	inkList:Ink[];

	/**
	 * If <b>true</b>, overprint in black. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PrintColorSeparationOptions}
	 * @since CS2
	 * @version CS2
	 */
	overPrintBlack:Boolean;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link PrintColorSeparationOptions}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}