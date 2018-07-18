/**
 * The Adobe Illustrator application object, referenced using the pre-defined global app object, which contains all other Illustrator objects.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link activeDocument}
 * ･ {@link browserAvailable}
 * ･ {@link documents}
 * ･ {@link flattenerPresetsList}
 * ･ {@link freeMemory}
 * ･ {@link name}
 * ･ {@link path}
 * ･ {@link PDFPresetsList}
 * ･ {@link PPDFileList}
 * ･ {@link preferences}
 * ･ {@link printerList}
 * ･ {@link printPresetsList}
 * ･ {@link scriptingVersion}
 * ･ {@link selection}
 * ･ {@link textFonts}
 * ･ {@link tracingPresetList}
 * ･ {@link typename}
 * ･ {@link userInteractionLevel}
 * ･ {@link version}
 * ･ {@link visible}
 *
 * <b>Methods</b>
 * ･ {@link beep}
 * ･ {@link concatenateMatrix}
 * ･ {@link concatenateRotationMatrix}
 * ･ {@link concatenateScaleMatrix}
 * ･ {@link concatenateTranslationMatrix}
 * ･ {@link getIdentityMatrix}
 * ･ {@link getRotationMatrix}
 * ･ {@link getScaleMatrix}
 * ･ {@link getTranslationMatrix}
 * ･ {@link invertMatrix}
 * ･ {@link isEqualMatrix}
 * ･ {@link isSingularMatrix}
 * ･ {@link open}
 * ･ {@link quit}
 * ･ {@link redraw}
 * ･ {@link showPresets}
 * ･ {@link translatePlaceholderText}
 *
 * @example
 * ➤ Duplicating the active document
 *     In this script, we use the application property activeDocument to duplicate the current document’s
 *     selection before moving it into a new document. This script also demonstrates how to create the new
 *     document.
 *       // Duplicate the selection from the active document into a new document.
 *
 *       // To invoke the JavaScript debugger, remove comment delimiters
 *       //$.level = 1; debugger;
 *
 *       var newItem;
 *       var docSelected = app.activeDocument.selection;
 *
 *       if (docSelected.length > 0) {
 *           // Create a new document and move the selected items to it.
 *           var newDoc = app.documents.add();
 *           if (docSelected.length > 0) {
 *               for (i = 0; i < docSelected.length; i++) {
 *                   docSelected[i].selected = false;
 *                   newItem = docSelected[i].duplicate(newDoc, ElementPlacement.PLACEATEND);
 *               }
 *           } else {
 *               docSelected.selected = false;
 *               newItem = docSelected.parent.duplicate(newDoc, ElementPlacement.PLACEATEND);
 *           }
 *       } else {
 *           alert("Please select one or more art objects");
 *       }
 */
declare class Application
{
	/**
	 * The active (frontmost) document in Illustrator.
	 * @type {Document} {@link Document} object
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	activeDocument:Document;

	/**
	 * Read-only. If <b>true</b>, a web browser is available.
	 * @const
	 * @type {Boolean}
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	readonly browserAvailable:Boolean;

	/**
	 * Read-only. The documents in the application.
	 * @const
	 * @type {Documents|Document[]} {@link Documents} collection object
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	readonly documents:Documents|Document[];

	/**
	 * Read-only. The list of flattener style names currently available for use.
	 * @const
	 * @type {Object}
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	readonly flattenerPresetsList:Object;

	/**
	 * Read-only. The amount of unused memory (in bytes) within the Adobe Illustrator partition.
	 * @const
	 * @type {Number} long
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	readonly freeMemory:Number;

	/**
	 * Read-only. The application’s name (not related to the filename of the application file).
	 * @const
	 * @type {String}
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	readonly name:String;

	/**
	 * Read-only. The file path to the application.
	 * @const
	 * @type {File} {@link File} object
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	readonly path:File;

	/**
	 * Read-only. The list of preset PDF-options names available for use.
	 * @const
	 * @type {Object}
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	readonly PDFPresetsList:Object;

	/**
	 * Read-only. The list of PPD files currently available for use.
	 * @const
	 * @type {Object}
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	readonly PPDFileList:Object;

	/**
	 * The preference settings for Illustrator.
	 * @type {Preferences} {@link Preferences} object
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	preferences:Preferences;

	/**
	 * Read-only. The list of installed printers.
	 * @const
	 * @type {Printer[]} Printers collection object
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	readonly printerList:Printer[];

	/**
	 * Read-only. The list of preset printing-options names available for use.
	 * @const
	 * @type {Object}
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	readonly printPresetsList:Object;

	/**
	 * Read-only. The version of the Scripting plugin.
	 * @const
	 * @type {String}
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	readonly scriptingVersion:String;

	/**
	 * All of the currently selected objects in the active (front most) document.
	 * @type {Object[]}
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	selection:Object[];

	/**
	 * Read-only. The installed fonts.
	 * @const
	 * @type {TextFonts|TextFont[]} {@link TextFonts} collection object
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	readonly textFonts:TextFonts|TextFont[];

	/**
	 * Read-only. The list of preset tracing-options names available for use.
	 * @const
	 * @type {String[]}
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	readonly tracingPresetList:String[];

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * What level of interaction with the user should be allowed when handling script commands.
	 * @type {UserInteractionLevel}
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	userInteractionLevel:UserInteractionLevel;

	/**
	 * Read-only. The version of the Adobe Illustrator application.
	 * @const
	 * @type {String}
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	readonly version:String;

	/**
	 * Read-only. If <b>true</b>, the application is visible.
	 * @const
	 * @type {Boolean}
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	readonly visible:Boolean;

	/**
	 * Alerts the user.
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	beep():void;

	/**
	 * Joins two matrices together.
	 * @param {Matrix} matrix {@link Matrix} object
	 * @param {Matrix} secondMatrix {@link Matrix} object
	 * @return {Matrix} {@link Matrix} object
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	concatenateMatrix(matrix:Matrix, secondMatrix:Matrix):Matrix;

	/**
	 * Joins a rotation translation to a transformation matrix.
	 * @param {Matrix} matrix {@link Matrix} object
	 * @param {Number} angle {@link Number} double
	 * @return {Matrix} {@link Matrix} object
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	concatenateRotationMatrix(matrix:Matrix, angle:Number):Matrix;

	/**
	 * Concatenates a scale translation to a transformation matrix.
	 * @param {Matrix} matrix {@link Matrix} object
	 * @param {Number} [scaleX] {@link Number} double
	 * @param {Number} [scaleY] {@link Number} double
	 * @return {Matrix} {@link Matrix} object
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	concatenateScaleMatrix(matrix:Matrix, scaleX?:Number, scaleY?:Number):Matrix;

	/**
	 * Joins a translation to a transformation matrix.
	 * @param {Matrix} matrix {@link Matrix} object
	 * @param {Number} [deltaX] {@link Number} object
	 * @param {Number} [deltaY] {@link Number} object
	 * @return {Matrix} {@link Matrix} object
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	concatenateTranslationMatrix(matrix:Matrix, deltaX?:Number, deltaY?:Number):Matrix;

	/**
	 * Returns an identity matrix.
	 * @return {Matrix} {@link Matrix} object
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	getIdentityMatrix():Matrix;

	/**
	 * Returns a transformation matrix containing a single rotation.
	 * @param {Number} [angle] {@link Number} double
	 * @return {Matrix} {@link Matrix} object
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	getRotationMatrix(angle?:Number):Matrix;

	/**
	 * Returns a transformation matrix containing a single scale.
	 * @param {Number} [scaleX] {@link Number} double
	 * @param {Number} [scaleY] {@link Number} double
	 * @return {Matrix} {@link Matrix} object
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	getScaleMatrix(scaleX?:Number, scaleY?:Number):Matrix;

	/**
	 * Returns a transformation matrix containing a single translation.
	 * @param {Number} [deltaX] {@link Number} double
	 * @param {Number} [deltaY] {@link Number} double
	 * @return {Matrix} {@link Matrix} object
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	getTranslationMatrix(deltaX?:Number, deltaY?:Number):Matrix;

	/**
	 * Inverts a matrix.
	 * @param {Matrix} matrix {@link Matrix} object
	 * @return {Matrix} {@link Matrix} object
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	invertMatrix(matrix:Matrix):Matrix;

	/**
	 * Checks whether the two matrices are equal.
	 * @param {Matrix} matrix {@link Matrix} object
	 * @param {Matrix} secondMatrix {@link Matrix} object
	 * @return {Boolean} {@link Boolean}
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	isEqualMatrix(matrix:Matrix, secondMatrix:Matrix):Boolean;

	/**
	 * Checks whether a matrix is singular and cannot be inverted.
	 * @param {Matrix} matrix {@link Matrix} object
	 * @return {Boolean} {@link Boolean}
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	isSingularMatrix(matrix:Matrix):Boolean;

	/**
	 * Opens the file specified by the string with the specified color space and options.
	 * If you open a pre-Illustrator 9 document that contains both RGB and CMYK colors and documentColorSpace is supplied,
	 * all colors are converted to the specified color space.
	 * If the parameter is not supplied, Illustrator opens a dialog so the user can choose the color space.
	 * @param {File} file {@link File} object
	 * @param {DocumentColorSpace} [documentColorSpace] {@link DocumentColorSpace}
	 * @param {Object} [options] {@link Object}
	 * @return {Document} {@link Document} object
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	open(file:File, documentColorSpace?:DocumentColorSpace, options?:Object):Document;

	/**
	 * Quits Illustrator. Note that if the clipboard contains data,
	 * Illustrator may show a dialog prompting the user to save the data for other applications.
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	quit():void;

	/**
	 * Forces Illustrator to redraw all its windows.
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	redraw():void;

	/**
	 * Gets presets from the file.
	 * @param {File} fileSpec {@link File} object
	 * @return {Object} {@link Object}
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	showPresets(fileSpec:File):Object;

	/**
	 * Translates the placeholder text to regular text (a way to enter Unicode points in hex values).
	 * @param {String} text {@link String}
	 * @return {String} {@link String}
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	translatePlaceholderText(text:String):String;
}