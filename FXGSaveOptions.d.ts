/**
 * Specifies options which may be supplied when saving a document as an FXG file. All properties are optional.
 *
 * @since CS4
 * @version CS4
 *
 * <b>Properties</b>
 * ･ {@link artboardRange}
 * ･ {@link clipContent}
 * ･ {@link downsampleLinkedImages}
 * ･ {@link filtersPolicy}
 * ･ {@link gradientsPolicy}
 * ･ {@link includeMetadata}
 * ･ {@link includeUnusedSymbols}
 * ･ {@link preserveEditingCapabilities}
 * ･ {@link saveMultipleArtboards}
 * ･ {@link textPolicy}
 * ･ {@link version}
 *
 * <b>Methods</b>
 */
declare class FXGSaveOptions extends ExportOptions
{
	/**
	 * If {@link saveMultipleArtboards} is <b>true</b>, this is considered for multi-asset extraction, which specifies the artboard range. An empty string extracts all the artboards. Default: empty string
	 * @type {String}
	 * @see {@link FXGSaveOptions}
	 * @since CS4
	 * @version CS4
	 */
	artboardRange:String;

	/**
	 * If <b>true</b>, content is clipped to the active artboard. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link FXGSaveOptions}
	 * @since CS4
	 * @version CS4
	 */
	clipContent:Boolean;

	/**
	 * If <b>true</b>, linked images are downsampled (at 72 dpi ). Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link FXGSaveOptions}
	 * @since CS4
	 * @version CS4
	 */
	downsampleLinkedImages:Boolean;

	/**
	 * The policy used by FXG to preserve filters. Default: {@link FiltersPreservePolicy.KEEPFILTERSEDITABLE}
	 * @type {FiltersPreservePolicy}
	 * @see {@link FXGSaveOptions}
	 * @since CS4
	 * @version CS4
	 */
	filtersPolicy:FiltersPreservePolicy;

	/**
	 * The policy used by FXG to preserve gradients. Default: {@link GradientsPreservePolicy.KEEPGRADIENTSEDITABLE}
	 * @type {GradientsPreservePolicy}
	 * @see {@link FXGSaveOptions}
	 * @since CS4
	 * @version CS4
	 */
	gradientsPolicy:GradientsPreservePolicy;

	/**
	 * If <b>true</b>, metadata (XMP) is included. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link FXGSaveOptions}
	 * @since CS4
	 * @version CS4
	 */
	includeMetadata:Boolean;

	/**
	 * If <b>true</b>, unused symbols are included. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link FXGSaveOptions}
	 * @since CS4
	 * @version CS4
	 */
	includeUnusedSymbols:Boolean;

	/**
	 * If <b>true</b>, the editing capabilities of FXG are preserved. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link FXGSaveOptions}
	 * @since CS4
	 * @version CS4
	 */
	preserveEditingCapabilities:Boolean;

	/**
	 * If <b>true</b>, all artboards or range of artboards are saved. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link FXGSaveOptions}
	 * @since CS4
	 * @version CS4
	 */
	saveMultipleArtboards:Boolean;

	/**
	 * The policy used by FXG to preserve text. Default: {@link TextPreservePolicy.KEEPTEXTEDITABLE}
	 * @type {TextPreservePolicy}
	 * @see {@link FXGSaveOptions}
	 * @since CS4
	 * @version CS4
	 */
	textPolicy:TextPreservePolicy;

	/**
	 * The version of the FXG file format to create. Default {@link FXGVersion.VERSION1PT0}
	 * @type {FXGVersion}
	 * @see {@link FXGSaveOptions}
	 * @since CS4
	 * @version CS4
	 */
	version:FXGVersion;
}