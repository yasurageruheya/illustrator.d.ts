/**
 * Information used for color management of the document.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link colorProfileMode}
 * ･ {@link intent}
 * ･ {@link name}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Managing colors for printing
 *     // Create a PrintColorManagementOptions object and assign it
 *     // to a PrintOptions object, then print with each color intent
 *
 *     // Add some symbol items to a new document
 *     var docRef = documents.add();
 *     var y = docRef.height - 30;
 *     for (var i = 0; i < 10; i++) {
 *
 *         symbolRef = docRef.symbols[i];
 *         symbolItemRef1 = docRef.symbolItems.add(symbolRef);
 *         symbolItemRef1.top = y;
 *         symbolItemRef1.left = 100;
 *         y -= (symbolItemRef1.height + 10);
 *     }
 *     redraw();
 *
 *     var colorOptions = new PrintColorManagementOptions();
 *     var options = new PrintOptions();
 *     options.colorManagementOptions = colorOptions;
 *     colorOptions.name = "ColorMatch RGB";
 *
 *     // Print the current document once for each color intent.
 *     colorOptions.intent = PrintColorIntent.ABSOLUTECOLORIMETRIC;
 *     docRef.print(options);
 *
 *     colorOptions.intent = PrintColorIntent.PERCEPTUALINTENT;
 *     docRef.print(options);
 *
 *     colorOptions.intent = PrintColorIntent.RELATIVECOLORIMETRIC;
 *     docRef.print(options);
 *
 *     colorOptions.intent = PrintColorIntent.SATURATIONINTENT;
 *     docRef.print(options);
 */
declare class PrintColorManagementOptions
{
	/**
	 * The color management profile mode. Default: {@link PrintColorProfile.SOURCEPROFILE}
	 * @type {PrintColorProfile}
	 * @see {@link PrintColorManagementOptions}
	 * @since CS2
	 * @version CS2
	 */
	colorProfileMode:PrintColorProfile;

	/**
	 * The color management intent type. Default: {@link PrintColorIntent.RELATIVECOLORIMETRIC}
	 * @type {PrintColorIntent}
	 * @see {@link PrintColorManagementOptions}
	 * @since CS2
	 * @version CS2
	 */
	intent:PrintColorIntent;

	/**
	 * The color management profile name.
	 * @type {String}
	 * @see {@link PrintColorManagementOptions}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link PrintColorManagementOptions}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}