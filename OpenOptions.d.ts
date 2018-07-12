/**
 * Options for opening a document, used with the {@link Application#open} method.
 *
 * @since CS2
 * @version CS5
 *
 * <b>Properties</b>
 * ･ {@link convertCropAreaToArtboard}
 * ･ {@link convertTilesToArtboard}
 * ･ {@link createArtboardWithArtworkBoundingBox}
 * ･ {@link openAs}
 * ･ {@link preserveLegacyArtboard}
 * ･ {@link updateLegacyGradientMesh}
 * ･ {@link updateLegacyText}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Automatically updating legacy text on open
 *     // Opens a file with legacy text (AI 10 or older), using
 *     // OpenOptions to automatically update the legacy text.
 *
 *     var fileRef = filePath;
 *     if (fileRef != null) {
 *         var optRef = new OpenOptions();
 *         optRef.updateLegacyText = true;
 *         var docRef = open(fileRef, DocumentColorSpace.RGB, optRef);
 *     }
 */
declare class OpenOptions
{
	/**
	 * Optional. Convert crop areas to artboards when opening a legacy document in Illustrator CS4 or later. When <b>false</b>, crop areas are discarded. Default: <b>true</b>.
	 * @type {Boolean}
	 * @see {@link OpenOptions}
	 * @since CS5
	 * @version CS5
	 */
	convertCropAreaToArtboard:Boolean;

	/**
	 * Optional. Convert print tiles to artboards when opening a legacy document in Illustrator CS4 or later. Default: <b>false</b>.
	 * @type {Boolean}
	 * @see {@link OpenOptions}
	 * @since CS5
	 * @version CS5
	 */
	convertTilesToArtboard:Boolean;

	/**
	 * Optional. Create an artboard with the dimensions of the bounding box of the artwork when opening a legacy document in Illustrator CS4 or later. Default: <b>false</b>.
	 * @type {Boolean}
	 * @see {@link OpenOptions}
	 * @since CS5
	 * @version CS5
	 */
	createArtboardWithArtworkBoundingBox:Boolean;

	/**
	 * Optional. Open the file as an Illustrator library of this type. Default: {@link LibraryType.IllustratorArtwork}.
	 * @type {LibraryType}
	 * @see {@link OpenOptions}
	 * @since CS3
	 * @version CS3
	 */
	openAs:LibraryType;

	/**
	 * Optional. Preserve legacy artboards when opening a legacy document in Illustrator CS4 or later. Default: <b>true</b>.
	 * @type {Boolean}
	 * @see {@link OpenOptions}
	 * @since CS5
	 * @version CS5
	 */
	preserveLegacyArtboard:Boolean;

	/**
	 * If <b>true</b>, preserves the spot colors in the gradient mesh objects for legacy documents (pre-Illustrator CS4). Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link OpenOptions}
	 * @since CS3
	 * @version CS4
	 */
	updateLegacyGradientMesh:Boolean;

	/**
	 * Optional. If <b>true</b>, update all legacy text items (from previous versions of Illustrator). Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link OpenOptions}
	 * @since CS2
	 * @version CS2
	 */
	updateLegacyText:Boolean;
}