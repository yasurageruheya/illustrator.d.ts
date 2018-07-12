/**
 * Options for saving a document as an Illustrator file, used with the {@link Document#saveAs} method. All properties are optional.
 *
 * @since CS2
 * @version CS3
 *
 * <b>Properties</b>
 * ･ {@link compatibility}
 * ･ {@link compressed}
 * ･ {@link embedICCProfile}
 * ･ {@link embedLinkedFiles}
 * ･ {@link flattenOutput}
 * ･ {@link fontSubsetThreshold}
 * ･ {@link overprint}
 * ･ {@link pdfCompatible}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Saving with options
 *     // Saves the current document to dest as an AI file with specified options,
 *     // dest specifies the full path and file name of the new file
 *
 *     function exportFileToAI(dest) {
 *         if (app.documents.length > 0) {
 *             var saveOptions = new IllustratorSaveOptions();
 *             var ai8Doc = new File(dest);
 *             saveOptions.compatibility = Compatibility.ILLUSTRATOR8;
 *             saveOptions.flattenOutput = OutputFlattening.PRESERVEAPPEARANCE;
 *             app.activeDocument.saveAs(ai8Doc, saveOptions);
 *         }
 *     }
 */
declare class IllustratorSaveOptions extends SaveOptions
{
	/**
	 * Specifies the version of Illustrator file format to create. Default: {@link Compatibility.ILLUSTRATOR13}
	 * @type {Compatibility}
	 * @see {@link IllustratorSaveOptions}
	 * @since CS2
	 * @version CS3
	 */
	compatibility:Compatibility;

	/**
	 * (Illustrator version 10 or later.) If <b>true</b>, the saved file is compressed. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link IllustratorSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	compressed:Boolean;

	/**
	 * (Illustrator version 9 or later.) If <b>true</b>, the document’s ICC profile is embedded in the saved file. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link IllustratorSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	embedICCProfile:Boolean;

	/**
	 * (Illustrator version 7 or later.) If <b>true</b>, the linked image files is embedded in the saved file; Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link IllustratorSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	embedLinkedFiles:Boolean;

	/**
	 * (Versions before Illustrator 9.) How transparency should be flattened for older file format versions. Default: {@link OutputFlattening.PRESERVEAPPEARANCE}
	 * @type {OutputFlattening}
	 * @see {@link IllustratorSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	flattenOutput:OutputFlattening;

	/**
	 * (Illustrator version 9 or later.) Include a subset of fonts when less than this percentage of characters is used in the document. Range: 0.0 to 100.0 Default: 100.0
	 * @type {Number} double
	 * @see {@link IllustratorSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	fontSubsetThreshold:Number;

	/**
	 * How to perform overprinting. Default: {@link PDFOverprint.PRESERVEPDFOVERPRINT}
	 * @type {PDFOverprint}
	 * @see {@link IllustratorSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	overprint:PDFOverprint;

	/**
	 * (Illustrator version 10 or later.) If <b>true</b>, the file is saved as a PDF compatible file. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link IllustratorSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	pdfCompatible:Boolean;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link IllustratorSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}