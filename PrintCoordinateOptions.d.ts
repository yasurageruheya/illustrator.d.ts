/**
 * Information about the media and associated printing parameters.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link emulsion}
 * ･ {@link fitToPage}
 * ･ {@link horizontalScale}
 * ･ {@link orientation}
 * ･ {@link position}
 * ･ {@link tiling}
 * ･ {@link typename}
 * ･ {@link verticalScale}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Managing print coordinates
 *     // Creates a new document with symbol items that extend
 *     // off the page then print with each print orientation
 *
 *     var docRef = documents.add();
 *     var y = 500;
 *     var x = -70
 *     if (docRef.symbols.length > 0) {
 *         for (var i = 0; i < 5; i++) {
 *             symbolRef = docRef.symbols[0];
 *             symbolItemRef1 = docRef.symbolItems.add(symbolRef);
 *             symbolItemRef1.top = y;
 *             symbolItemRef1.left = x;
 *             x += 30;
 *         }
 *         redraw();
 *         // Print it with various Coordinate Options
 *         var coordinateOptions = new PrintCoordinateOptions();
 *         var options = new PrintOptions();
 *         options.coordinateOptions = coordinateOptions;
 *
 *         coordinateOptions.emulsion = true; // reverse from right to left
 *         coordinateOptions.fitToMedia = true; // fit artwork to page size
 *         coordinateOptions.orientation = PrintOrientation.LANDSCAPE;
 *         docRef.print(options);
 *         coordinateOptions.emulsion = false;
 *         coordinateOptions.fitToMedia = false;
 *         coordinateOptions.orientation = PrintOrientation.PORTRAIT;
 *         coordinateOptions.horizontalScale = 50;
 *         coordinateOptions.verticalScale = 50;
 *         docRef.print(options);
 *     }
 */
declare class PrintCoordinateOptions
{
	/**
	 * If <b>true</b>, flip artwork horizontally. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PrintCoordinateOptions}
	 * @since CS2
	 * @version CS2
	 */
	emulsion:Boolean;

	/**
	 * If <b>true</b>, proportionally scale the artwork to fit on media. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PrintCoordinateOptions}
	 * @since CS2
	 * @version CS2
	 */
	fitToPage:Boolean;

	/**
	 * The horizontal scaling factor expressed as a percentage (100 = 100%). Range: 1.0 to 10000.0 Default: 100.0
	 * @type {Number} double
	 * @see {@link PrintCoordinateOptions}
	 * @since CS2
	 * @version CS2
	 */
	horizontalScale:Number;

	/**
	 * The artwork orientation. Default: {@link PrintOrientation.PORTRAIT}
	 * @type {PrintOrientation}
	 * @see {@link PrintCoordinateOptions}
	 * @since CS2
	 * @version CS2
	 */
	orientation:PrintOrientation;

	/**
	 * The artwork position on media. Default: {@link PrintPosition.TRANSLATECENTER}
	 * @type {PrintPosition}
	 * @see {@link PrintCoordinateOptions}
	 * @since CS2
	 * @version CS2
	 */
	position:PrintPosition;

	/**
	 * The page tiling mode. Default: {@link PrintTiling.TILESINGLEFULLPAGE}
	 * @type {PrintTiling}
	 * @see {@link PrintCoordinateOptions}
	 * @since CS2
	 * @version CS2
	 */
	tiling:PrintTiling;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link PrintCoordinateOptions}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * The vertical scaling factor expressed as a percentage (100 = 100%) Range: 1.0 to 10000.0 Default: 100.0
	 * @type {Number} double
	 * @see {@link PrintCoordinateOptions}
	 * @since CS2
	 * @version CS2
	 */
	verticalScale:Number;
}