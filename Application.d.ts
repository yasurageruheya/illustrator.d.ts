/**
 * The Adobe® Illustrator® {@link Application} object, referenced using the pre-defined global <a href="psi_element://Application">app</a> object, which contains all other Illustrator objects.
 *
 * @since CS2
 * @version CC
 *
 * <b>Properties</b>
 * ･ {@link activeDocument}
 * ･ {@link browserAvailable}
 * ･ {@link buildNumber}
 * ･ {@link colorSettingsList}
 * ･ {@link coordinateSystem}
 * ･ {@link defaultColorSettings}
 * ･ {@link documents}
 * ･ {@link flattenerPresetList}
 * ･ {@link freeMemory}
 * ･ {@link locale}
 * ･ {@link name}
 * ･ {@link pasteRememberLayers}
 * ･ {@link path}
 * ･ {@link PDFPresetsList}
 * ･ {@link PPDFileList}
 * ･ {@link preferences}
 * ･ {@link printerList}
 * ･ {@link printPresetsList}
 * ･ {@link scriptingVersion}
 * ･ {@link selection}
 * ･ {@link startupPresetsList}
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
 * ･ {@link convertSampleColor}
 * ･ {@link copy}
 * ･ {@link cut}
 * ･ {@link deleteWorkspace}
 * ･ {@link getIdentityMatrix}
 * ･ {@link getPPDFileInfo}
 * ･ {@link getPresetFileOfType}
 * ･ {@link getPresetSettings}
 * ･ {@link getRotationMatrix}
 * ･ {@link getScaleMatrix}
 * ･ {@link getScriptableHelpGroup}
 * ･ {@link getTranslationMatrix}
 * ･ {@link invertMatrix}
 * ･ {@link isEqualMatrix}
 * ･ {@link isSingularMatrix}
 * ･ {@link loadColorSettings}
 * ･ {@link open}
 * ･ {@link paste}
 * ･ {@link quit}
 * ･ {@link redo}
 * ･ {@link redraw}
 * ･ {@link resetWorkspace}
 * ･ {@link saveWorkspace}
 * ･ {@link sendScriptMessage}
 * ･ {@link showPresets}
 * ･ {@link switchWorkspace}
 * ･ {@link translatePlaceholderText}
 * ･ {@link undo}
 *
 * @example
 * ➤ Duplicating the active document
 *     // Duplicates any selected items from
 *     // the active document into a new document.
 *
 *     var newItem;
 *     var docSelected = app.activeDocument.selection;
 *
 *     if (docSelected.length > 0) {
 *         // Create a new document and move the selected items to it.
 *         var newDoc = app.documents.add();
 *         if (docSelected.length > 0) {
 *             for (i = 0; i < docSelected.length; i++) {
 *                 docSelected[i].selected = false;
 *                 newItem = docSelected[i].duplicate(newDoc, ElementPlacement.PLACEATEND);
 *             }
 *         } else {
 *             docSelected.selected = false;
 *             newItem = docSelected.parent.duplicate(newDoc, ElementPlacement.PLACEATEND);
 *         }
 *     } else {
 *         alert("Please select one or more art objects");
 *     }
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
	 * Read-only. The application’s build number.
	 * @const
	 * @type {String}
	 * @see {@link Application}
	 * @since CS4
	 * @version CS4
	 */
	readonly buildNumber:String;

	/**
	 * Read-only. The list of color-settings files currently available for use.
	 * @const
	 * @type {Object}
	 * @see {@link Application}
	 * @since CS3
	 * @version CS3
	 */
	readonly colorSettingsList:Object;

	/**
	 * The coordinate system currently in use, document or artboard.
	 * @type {CoordinateSystem}
	 * @see {@link Application}
	 * @since CS5
	 * @version CS5
	 */
	coordinateSystem:CoordinateSystem;

	/**
	 * Read-only. The default color-settings file for the current application locale.
	 * @const
	 * @type {File} {@link File} object
	 * @see {@link Application}
	 * @since CS3
	 * @version CS3
	 */
	readonly defaultColorSettings:File;

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
	 * @since CS3
	 * @version CS3
	 */
	readonly flattenerPresetList:Object;

	/**
	 * Read-only. The amount of unused memory (in bytes) within the Illustrator partition.
	 * @const
	 * @type {Number} long
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	readonly freeMemory:Number;

	/**
	 * Read-only. The application’s locale.
	 * @const
	 * @type {String}
	 * @see {@link Application}
	 * @since CS4
	 * @version CS4
	 */
	readonly locale:String;

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
	 * Read-only. If <b>true</b>, the paste operation maintains the layer structure.
	 * @const
	 * @type {Boolean}
	 * @see {@link Application}
	 * @since CC
	 * @version CC
	 */
	readonly pasteRememberLayers:Boolean;

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
	 * Illustrator’s preference settings.
	 * @type {Preferences} {@link Preferences} object
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	preferences:Preferences;

	/**
	 * Read-only. The list of installed printers.
	 * @const
	 * @type {Printer[]} array of {@link Printer}
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
	 * Read-only. The version of the Scripting plug-in.
	 * @const
	 * @type {String}
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	readonly scriptingVersion:String;

	/**
	 * All currently selected objects in the active (frontmost) document.
	 * @type {Object[]} array of objects
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	selection:Object[];

	/**
	 * Read-only. The list of presets available for creating a new document.
	 * @const
	 * @type {Object}
	 * @see {@link Application}
	 * @since CS3
	 * @version CS3
	 */
	readonly startupPresetsList:Object;

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
	 * @type {String[]} array of string
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
	 * Read-only. The application’s version.
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
	 * @param {Number} [deltaX] {@link Number} double
	 * @param {Number} [deltaY] {@link Number} double
	 * @return {Matrix} {@link Matrix} object
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	concatenateTranslationMatrix(matrix:Matrix, deltaX?:Number, deltaY?:Number):Matrix;

	/**
	 * Converts a sample-component color from one color space to another.
	 * @param {ImageColorSpace} sourceColorSpace {@link ImageColorSpace}
	 * @param {Number[]} sourceColor ColorComponents array of {@link Number}
	 * @param {ImageColorSpace} destColorSpace {@link ImageColorSpace}
	 * @param {ColorConvertPurpose} colorConvertPurpose {@link ColorConvertPurpose}
	 * @param {Boolean} [sourceHasAlpha] {@link Boolean}
	 * @param {Boolean} [destHasAlpha] {@link Boolean}
	 * @return {Number[]} ColorComponents array of {@link Number}
	 * @see {@link Application}
	 * @since CS4
	 * @version CS4
	 */
	convertSampleColor(sourceColorSpace:ImageColorSpace, sourceColor:Number[], destColorSpace:ImageColorSpace, colorConvertPurpose:ColorConvertPurpose, sourceHasAlpha?:Boolean, destHasAlpha?:Boolean):Number[];

	/**
	 * Copies current selection to the clipboard.
	 * @see {@link Application}
	 * @since CS3
	 * @version CS3
	 */
	copy():void;

	/**
	 * Cuts current selection to the clipboard.
	 * @see {@link Application}
	 * @since CS3
	 * @version CS3
	 */
	cut():void;

	/**
	 * Deletes an existing workspace.
	 * @param {String} workSpaceName {@link String}
	 * @return {Boolean} {@link Boolean}
	 * @see {@link Application}
	 * @since CC
	 * @version CC
	 */
	deleteWorkspace(workSpaceName:String):Boolean;

	/**
	 * Returns an identity matrix.
	 * @return {Matrix} {@link Matrix} object
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	getIdentityMatrix():Matrix;

	/**
	 * Gets detailed file information for specified PPD file.
	 * @param {String} name {@link String}
	 * @return {PPDFileInfo} {@link PPDFileInfo} object
	 * @see {@link Application}
	 * @since CS3
	 * @version CS3
	 */
	getPPDFileInfo(name:String):PPDFileInfo;

	/**
	 * Returns the full path to the application’s default document profile for the specified preset type.
	 * @param {DocumentPresetType} presetType {@link DocumentPresetType}
	 * @return {File} {@link File} object
	 * @see {@link Application}
	 * @since CS3
	 * @version CS3
	 */
	getPresetFileOfType(presetType:DocumentPresetType):File;

	/**
	 * Retrieves the tracing-option settings from the template with a given preset name.
	 * @param {String} preset {@link String}
	 * @return {DocumentPreset} {@link DocumentPreset} object
	 * @see {@link Application}
	 * @since CS3
	 * @version CS3
	 */
	getPresetSettings(preset:String):DocumentPreset;

	/**
	 * Returns a transformation matrix containing a single rotation.
	 * <b>NOTE:</b> Requires a value in degrees. For example, 30 rotates the object 30 degrees counterclockwise; -30 rotates the object 30 degrees clockwise.
	 * @param {Number} [angle] {@link Number} double
	 * @return {Matrix} {@link Matrix} object
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	getRotationMatrix(angle?:Number):Matrix;

	/**
	 * Returns a transformation matrix containing a single scale.
	 * <b>NOTE:</b> Requires a value in percentage. For example, 60 scales the object to 60% of its original size; 200 doubles the object’s bounds.
	 * @param {Number} [scaleX] {@link Number} double
	 * @param {Number} [scaleY] {@link Number} double
	 * @return {Matrix} {@link Matrix} object
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	getScaleMatrix(scaleX?:Number, scaleY?:Number):Matrix;

	/**
	 * Gets the scriptable help group object that represents the search widget in the <a href="psi_element://Application">app</a> bar.
	 * @return {Object} {@link Object} variant
	 * @see {@link Application}
	 * @since CS4
	 * @version CS4
	 */
	getScriptableHelpGroup():Object;

	/**
	 * Returns a transformation matrix containing a single translation.
	 * <b>NOTE:</b> Requires a value in points. For example, ({100, 200} moves the object 100 pt. to the right and 200 pt. up; a minus before each number moves the object left and down.
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
	 * Loads color settings from specified file, or, if file is empty, turns color management off.
	 * @param {File} fileSpec {@link File} object
	 * @see {@link Application}
	 * @since CS3
	 * @version CS3
	 */
	loadColorSettings(fileSpec:File):void;

	/**
	 * Opens the specified document file.
	 * If you open a pre-Illustrator 9 document that contains both RGB and CMYK colors and {@link DocumentColorSpace} is supplied, all colors are converted to the specified color space. If the parameter is not supplied, Illustrator opens a dialog so the user can choose the color space.
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
	 * Pastes current clipboard content into the current document.
	 * @see {@link Application}
	 * @since CS3
	 * @version CS3
	 */
	paste():void;

	/**
	 * Quits Illustrator. Note that if the clipboard contains data, Illustrator may show a dialog prompting the user to save the data for other applications.
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	quit():void;

	/**
	 * Redoes the most recently undone transaction.
	 * @see {@link Application}
	 * @since CS3
	 * @version CS3
	 */
	redo():void

	/**
	 * Forces Illustrator to {@link Application#redraw} all its windows.
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	redraw():void;

	/**
	 * Resets the current workspace.
	 * @return {Boolean} {@link Boolean}
	 * @see {@link Application}
	 * @since CC
	 * @version CC
	 */
	resetWorkspace():Boolean;

	/**
	 * Saves a new workspace.
	 * @param {String} workspaceName {@link String}
	 * @return {Boolean} {@link Boolean}
	 * @see {@link Application}
	 * @since CC
	 * @version CC
	 */
	saveWorkspace(workspaceName:String):Boolean;

	/**
	 * Sends a plug-in-defined command message to a plug-in with given input arguments, and returns the plug-in-defined result string.
	 * @param {String} pluginName {@link String}
	 * @param {String} messageSelector {@link String}
	 * @param {String} inputString {@link String}
	 * @return {String} {@link String}
	 * @see {@link Application}
	 * @since CS6
	 * @version CS6
	 */
	sendScriptMessage(pluginName:String, messageSelector:String, inputString:String):String;

	/**
	 * Gets presets from the file.
	 * @param {File} fileSpec {@link File} object
	 * @return {String[]} PrintPresetList. array of {@link String}
	 * @see {@link Application}
	 * @since CS2
	 * @version CS4
	 */
	showPresets(fileSpec:File):String[];

	/**
	 * Switches to the specified workspace.
	 * @param {String} workspaceName {@link String}
	 * @return {Boolean} {@link Boolean}
	 * @see {@link Application}
	 * @since CC
	 * @version CC
	 */
	switchWorkspace(workspaceName:String):Boolean;

	/**
	 * Translates the placeholder text to regular text (a way to enter Unicode points in hex values).
	 * @param {String} text {@link String}
	 * @return {String} {@link String}
	 * @see {@link Application}
	 * @since CS2
	 * @version CS2
	 */
	translatePlaceholderText(text:String):String;

	/**
	 * Undoes the most recent transaction.
	 * @see {@link Application}
	 * @since CS3
	 * @version CS3
	 */
	undo():void;
}