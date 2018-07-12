/**
 * Specifies options which may be supplied when saving a document as an FXG file. All properties are optional.
 *
 * @since CS4
 * @version CS5
 *
 * <b>Properties</b>
 * ･ {@link artboardRange}
 * ･ {@link blendsPolicy}
 * ･ {@link downsampleLinkedImages}
 * ･ {@link filtersPolicy}
 * ･ {@link gradientsPolicy}
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
	 * If {@link saveMultipleArtboards} is <b>true</b>, this is considered for multi-asset extraction, which specifies the artboard range. An empty string extracts all the artboards. Default: <b>empty string</b>
	 * @type {String}
	 * @see {@link FXGSaveOptions}
	 * @since CS4
	 * @version CS4
	 */
	artboardRange:String;

	/**
	 * The policy used by FXG to expand blends. Default: {@link BlendsExpandPolicy.AUTOMATICALLYCONVERTBLENDS}
	 * @type {BlendsExpandPolicy}
	 * @see {@link FXGSaveOptions}
	 * @since CS5
	 * @version CS5
	 */
	blendsPolicy:BlendsExpandPolicy;

	/**
	 * If <b>true</b>, linked images are downsampled (at 72 dpi). Default: <b>false</b>
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
	 * The policy used by FXG to preserve gradients. Default: {@link GradientsPreservePolicy.AUTOMATICALLYCONVERTGRADIENTS}
	 * @type {GradientsPreservePolicy}
	 * @see {@link FXGSaveOptions}
	 * @since CS4
	 * @version CS4
	 */
	gradientsPolicy:GradientsPreservePolicy;

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
	 * The policy used by FXG to preserve text. Default: {@link TextPreservePolicy.AUTOMATICALLYCONVERTTEXT}
	 * @type {TextPreservePolicy}
	 * @see {@link FXGSaveOptions}
	 * @since CS4
	 * @version CS4
	 */
	textPolicy:TextPreservePolicy;

	/**
	 * The version of the FXG file format to create. Default {@link FXGVersion.VERSION2PT0}
	 * @type {FXGVersion}
	 * @see {@link FXGSaveOptions}
	 * @since CS4
	 * @version CS4
	 */
	version:FXGVersion;
}