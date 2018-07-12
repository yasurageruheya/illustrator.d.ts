/**
 * Contains information about font downloading and substitution for the fonts used for printing the document.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link downloadFonts}
 * ･ {@link fontSubstitution}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Printing with font options
 *     // Creates a new document, adds text then prints with specified font options.
 *
 *     var docRef = documents.add();
 *     var pathRef = docRef.pathItems.rectangle(500, 300, 400, 400);
 *     var textRef = docRef.textFrames.areaText(pathRef);
 *     textRef.contents = "Text example";
 *     //Create PrintFontOptions object and assign to a PrintOptions object
 *     var fontOpts = new PrintFontOptions();
 *     var printOpts = new PrintOptions();
 *     printOpts.fontOptions = fontOpts;
 *     //Set some font options
 *     fontOpts.downloadFonts = PrintFontDownloadMode.DOWNLOADNONE;
 *     fontOpts.fontSubstitution = FontSubstitutionPolicy.SUBSTITUTEDEVICE;
 *
 *     // print it
 *     activeDocument.print(printOpts);
 */
declare class PrintFontOptions
{
	/**
	 * The font download mode. Default: {@link PrintFontDownloadMode.DOWNLOADSUBSET}
	 * @type {PrintFontDownloadMode}
	 * @see {@link PrintFontOptions}
	 * @since CS2
	 * @version CS2
	 */
	downloadFonts:PrintFontDownloadMode;

	/**
	 * The font substitution policy. Default: {@link FontSubstitutionPolicy.SUBSTITUTEOBLIQUE}
	 * @type {FontSubstitutionPolicy}
	 * @see {@link PrintFontOptions}
	 * @since CS2
	 * @version CS2
	 */
	fontSubstitution:FontSubstitutionPolicy;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link PrintFontOptions}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}