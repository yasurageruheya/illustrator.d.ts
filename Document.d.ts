/**
 * An Illustrator document. Documents are contained in the {@link Application} object.
 * The default document settings—those properties starting with the word “default”—are global settings that affect the current document. Be sure to modify these default properties only when a document is open. Note that if you set default properties to desired values before creating new objects, you can streamline your scripts, eliminating the need to specify specific properties such as fillColor and stroked that have default properties.
 * A document’s color space, height, and width can only be set when the document is created. You cannot modify these properties in an existing document. See {@link Application#open} for more information on how document color spaces are handled.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link activeDataset}
 * ･ {@link activeLayer}
 * ･ {@link activeView}
 * ･ {@link brushes}
 * ･ {@link characterStyles}
 * ･ {@link compoundPathItems}
 * ･ {@link cropBox}
 * ･ {@link cropStyle}
 * ･ {@link dataSets}
 * ･ {@link defaultFillColor}
 * ･ {@link defaultFilled}
 * ･ {@link defaultFillOverprint}
 * ･ {@link defaultStrokeCap}
 * ･ {@link defaultStrokeColor}
 * ･ {@link defaultStroked}
 * ･ {@link defaultStrokeDashes}
 * ･ {@link defaultStrokeDashOffset}
 * ･ {@link defaultStrokeJoin}
 * ･ {@link defaultStrokeMiterLimit}
 * ･ {@link defaultStrokeOverprint}
 * ･ {@link defaultStrokeWidth}
 * ･ {@link documentColorSpace}
 * ･ {@link fullName}
 * ･ {@link geometricBounds}
 * ･ {@link gradients}
 * ･ {@link graphicStyles}
 * ･ {@link graphItems}
 * ･ {@link groupItems}
 * ･ {@link height}
 * ･ {@link inkList}
 * ･ {@link kinsokuSet}
 * ･ {@link layers}
 * ･ {@link legacyTextItems}
 * ･ {@link meshItems}
 * ･ {@link mojikumiSet}
 * ･ {@link name}
 * ･ {@link outputResolution}
 * ･ {@link pageItems}
 * ･ {@link pageOrigin}
 * ･ {@link paragraphStyles}
 * ･ {@link parent}
 * ･ {@link path}
 * ･ {@link pathItems}
 * ･ {@link patterns}
 * ･ {@link placedItems}
 * ･ {@link pluginItems}
 * ･ {@link printTiles}
 * ･ {@link rasterItems}
 * ･ {@link rulerOrigin}
 * ･ {@link rulerUnits}
 * ･ {@link saved}
 * ･ {@link selection}
 * ･ {@link showPlacedImages}
 * ･ {@link splitLongPaths}
 * ･ {@link spots}
 * ･ {@link stationery}
 * ･ {@link stories}
 * ･ {@link swatches}
 * ･ {@link symbolItems}
 * ･ {@link symbols}
 * ･ {@link tags}
 * ･ {@link textFrames}
 * ･ {@link tileFullPages}
 * ･ {@link typename}
 * ･ {@link useDefaultScreen}
 * ･ {@link variables}
 * ･ {@link variablesLocked}
 * ･ {@link views}
 * ･ {@link visibleBounds}
 * ･ {@link width}
 *
 * <b>Methods</b>
 * ･ {@link activate}
 * ･ {@link close}
 * ･ {@link exportFile}
 * ･ {@link exportPDFPreset}
 * ･ {@link exportPrintPreset}
 * ･ {@link exportVariables}
 * ･ {@link importCharacterStyles}
 * ･ {@link importParagraphStyles}
 * ･ {@link importPDFPreset}
 * ･ {@link importPrintPreset}
 * ･ {@link importVariables}
 * ･ {@link print}
 * ･ {@link save}
 * ･ {@link saveAs}
 *
 * @example
 * ➤ Deselect all objects in the current document
 *   The frontmost document can be referred to as either activeDocument or documents[0].
 *     var docRef = activeDocument;
 *     docRef.selection = null;
 *
 * ➤ Close a document
 *     // Close the active document without saving changes.
 *
 *     if (app.documents.length > 0) {
 *         aiDocument = app.activeDocument;
 *         aiDocument.close(SaveOptions.DONOTSAVECHANGES);
 *         aiDocument = null;
 *     }
 *
 * ➤ Create a document with defaults
 *   This example demonstrates how to create a new document with specific default properties.
 *     // Create a document if none exists
 *     // Set fill and stroke defaults
 *
 *     if (app.documents.length == 0) {
 *         doc = app.documents.add();
 *     } else {
 *         doc = app.activeDocument;
 *     }
 *     doc.defaultFilled = true;
 *     doc.defaultStroked = true;
 */
declare class Document
{
	/**
	 * The currently opened dataset.
	 * @type {Dataset} {@link Dataset} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	activeDataset:Dataset;

	/**
	 * The active layer in the document.
	 * @type {Layer} {@link Layer} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	activeLayer:Layer;

	/**
	 * Read-only. The document’s current view.
	 * @const
	 * @type {View} {@link View} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly activeView:View;

	/**
	 * Read-only. The brushes contained in the document.
	 * @const
	 * @type {Brushes} {@link Brushes} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly brushes:Brushes;

	/**
	 * Read-only. The list of character styles in this document.
	 * @const
	 * @type {CharacterStyles} {@link CharacterStyles} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly characterStyles:CharacterStyles;

	/**
	 * Read-only. The compound path items contained in the document.
	 * @const
	 * @type {CompoundPathItems} {@link CompoundPathItems} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly compoundPathItems:CompoundPathItems;

	/**
	 * The boundary of the document’s cropping box for output, or <b>null</b> if no value has been set.
	 * @type {Number[]} array of 4 numbers
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	cropBox:Number[];

	/**
	 * The style of the document’s cropping box.
	 * @type {CropOptions}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	cropStyle:CropOptions;

	/**
	 * Read-only. The datasets contained in the document.
	 * @const
	 * @type {Datasets} {@link Datasets} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly dataSets:Datasets;

	/**
	 * The color to use to fill new paths if {@link Document#defaultFilled} is <b>true</b>.
	 * @type {Color} {@link Color} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	defaultFillColor:Color;

	/**
	 * If <b>true</b>, a new path should be filled.
	 * @type {Boolean}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	defaultFilled:Boolean;

	/**
	 * If <b>true</b>, the art beneath a filled object should be overprinted by default.
	 * @type {Boolean}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	defaultFillOverprint:Boolean;

	/**
	 * Default type of line capping for paths created.
	 * @type {StrokeCap}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	defaultStrokeCap:StrokeCap;

	/**
	 * The stroke color for new paths if default stroked is <b>true</b>.
	 * @type {Color} {@link Color} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	defaultStrokeColor:Color;

	/**
	 * If <b>true</b>, a new path should be stroked.
	 * @type {Boolean}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	defaultStroked:Boolean;

	/**
	 * Default lengths for dashes and gaps in dashed lines, starting with the first dash length, followed by the first gap length, and so on. Set to an empty object, {}, for solid line.
	 * @type {Object}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	defaultStrokeDashes:Object;

	/**
	 * The default distance into the dash pattern at which the pattern should be started for new paths.
	 * @type {Number} double
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	defaultStrokeDashOffset:Number;

	/**
	 * Default type of joints in new paths.
	 * @type {StrokeJoin}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	defaultStrokeJoin:StrokeJoin;

	/**
	 * When a default stroke join is set to mitered, this property specifies when the join will be converted to beveled (squared-off ) by default.
	 * The default miter limit of 4 means that when the length of the point reaches four times the stroke weight, the join switches from a miter join to a bevel join. Range: 1 to 500; a value of 1 specifies a bevel join.
	 * @type {Number} double
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	defaultStrokeMiterLimit:Number;

	/**
	 * If <b>true</b>, the art beneath a stroked object should be overprinted by default.
	 * @type {Boolean}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	defaultStrokeOverprint:Boolean;

	/**
	 * Default width of stroke for new paths.
	 * @type {Number} double
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	defaultStrokeWidth:Number;

	/**
	 * Read-only. The color specification system to use for this document’s color space.
	 * @const
	 * @type {DocumentColorSpace}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly documentColorSpace:DocumentColorSpace;

	/**
	 * Read-only. The file associated with the document, which includes the complete path to the file.
	 * @const
	 * @type {File} {@link File} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly fullName:File;

	/**
	 * Read-only. The bounds of the illustration excluding the stroke width of any objects in the document.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly geometricBounds:Number[];

	/**
	 * Read-only. The gradients contained in the document.
	 * @const
	 * @type {Gradients} {@link Gradients} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly gradients:Gradients;

	/**
	 * Read-only. The graphic styles defined in this document.
	 * @const
	 * @type {GraphicStyles} {@link GraphicStyles} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly graphicStyles:GraphicStyles;

	/**
	 * Read-only. The graph art items in this document.
	 * @const
	 * @type {GraphItems} {@link GraphItems} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly graphItems:GraphItems;

	/**
	 * Read-only. The group items contained in the document.
	 * @const
	 * @type {GroupItems} {@link GroupItems} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly groupItems:GroupItems;

	/**
	 * Read-only. The height of the document.
	 * @const
	 * @type {Number} double
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly height:Number;

	/**
	 * Read-only. The list of inks in this document.
	 * @const
	 * @type {Object}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly inkList:Object;

	/**
	 * Read-only. The Kinsoku set of characters that cannot begin or end a line of Japanese text.
	 * @const
	 * @type {Object}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly kinsokuSet:Object;

	/**
	 * Read-only. The layers contained in the document.
	 * @const
	 * @type {Layers} {@link Layers} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly layers:Layers;

	/**
	 * Read-only. The text frame items in this story.
	 * @const
	 * @type {LegacyTextItems} {@link LegacyTextItems} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly legacyTextItems:LegacyTextItems;

	/**
	 * Read-only. The mesh art items contained in the document.
	 * @const
	 * @type {MeshItems} {@link MeshItems} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly meshItems:MeshItems;

	/**
	 * Read-only. A list of names of predefined Mojikumi sets which specify the spacing for the layout and composition of Japanese text.
	 * @const
	 * @type {Object}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly mojikumiSet:Object;

	/**
	 * Read-only. The document’s name (not the complete file path to the document).
	 * @const
	 * @type {String}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly name:String;

	/**
	 * Read-only. The current output resolution for the document in dots per inch (dpi).
	 * @const
	 * @type {Number} double
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly outputResolution:Number;

	/**
	 * Read-only. The page items (all art item classes) contained in the document.
	 * @const
	 * @type {PageItems} {@link PageItems} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly pageItems:PageItems;

	/**
	 * The zero-point of the page in the document without margins, relative to the overall height and width.
	 * @type {Number[]} array of 2 numbers
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	pageOrigin:Number[];

	/**
	 * Read-only. The list of paragraph styles in this document.
	 * @const
	 * @type {ParagraphStyles} {@link ParagraphStyles} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly paragraphStyles:ParagraphStyles;

	/**
	 * Read-only. The application that contains this document.
	 * @const
	 * @type {Application} {@link Application} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Application;

	/**
	 * Read-only. The file associated with the document, which includes the complete path to the file.
	 * @const
	 * @type {File} {@link File} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly path:File;

	/**
	 * Read-only. The path items contained in this document.
	 * @const
	 * @type {PathItems} {@link PathItems} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly pathItems:PathItems;

	/**
	 * Read-only. The patterns contained in this document.
	 * @const
	 * @type {Patterns} {@link Patterns} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly patterns:Patterns;

	/**
	 * Read-only. The placed items contained in this document.
	 * @const
	 * @type {PlacedItems} {@link PlacedItems} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly placedItems:PlacedItems;

	/**
	 * Read-only. The plugin items contained in this document.
	 * @const
	 * @type {PluginItems} {@link PluginItems} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly pluginItems:PluginItems;

	/**
	 * Read-only. If <b>true</b>, this document should be printed as tiled output.
	 * @const
	 * @type {Boolean}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly printTiles:Boolean;

	/**
	 * Read-only. The raster items contained in this document.
	 * @const
	 * @type {RasterItems} {@link RasterItems} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly rasterItems:RasterItems;

	/**
	 * The zero-point of the rulers in the document relative to the bottom left of the document.
	 * @type {Number[]} array of 2 numbers
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	rulerOrigin:Number[];

	/**
	 * Read-only. The default measurement units for the rulers in the document.
	 * @const
	 * @type {RulerUnits}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly rulerUnits:RulerUnits;

	/**
	 * If <b>true</b>, the document has not been changed since last time it was saved.
	 * @type {Boolean}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	saved:Boolean;

	/**
	 * References to the objects in this document’s current selection, or <b>null</b> when nothing is selected.
	 *  A reference to an insertion point is returned when there is an active insertion point in the contents of a selected text art item. Similarly, a reference to a range of text is returned when characters are selected in the contents of a text art item.
	 * @type {Object[]} array of objects
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	selection:Object[];

	/**
	 * Read-only. If <b>true</b>, placed images should be displayed in the document.
	 * @const
	 * @type {Boolean}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly showPlacedImages:Boolean;

	/**
	 * Read-only. If <b>true</b>, long paths should be split when printing.
	 * @const
	 * @type {Boolean}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly splitLongPaths:Boolean;

	/**
	 * Read-only. The spot colors contained in this document.
	 * @const
	 * @type {Spots} {@link Spots} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly spots:Spots;

	/**
	 * Read-only. If <b>true</b>, the file is a stationery file.
	 * @const
	 * @type {Boolean}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly stationery:Boolean;

	/**
	 * Read-only. The story items in this document.
	 * @const
	 * @type {Stories} {@link Stories} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly stories:Stories;

	/**
	 * Read-only. The swatches contained in this document.
	 * @const
	 * @type {Swatches} {@link Swatches} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly swatches:Swatches;

	/**
	 * Read-only. The art items in the document linked to symbols.
	 * @const
	 * @type {SymbolItems} {@link SymbolItems} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly symbolItems:SymbolItems;

	/**
	 * Read-only. The symbols contained in this document.
	 * @const
	 * @type {Symbols} {@link Symbols} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly symbols:Symbols;

	/**
	 * Read-only. The tags contained in this document.
	 * @const
	 * @type {Tags} {@link Tags} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly tags:Tags;

	/**
	 * Read-only. The text frames contained in this document.
	 * @const
	 * @type {TextFrames} {@link TextFrames} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly textFrames:TextFrames;

	/**
	 * Read-only. If <b>true</b>, full pages should be tiled when printing this document.
	 * @const
	 * @type {Boolean}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly tileFullPages:Boolean;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Read-only. If <b>true</b>, the printer’s default screen should be used when printing this document.
	 * @const
	 * @type {Boolean}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly useDefaultScreen:Boolean;

	/**
	 * Read-only. The variables defined in this document.
	 * @const
	 * @type {Variables} {@link Variables} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly variables:Variables;

	/**
	 * If <b>true</b>, the variables are locked.
	 * @type {Boolean}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	variablesLocked:Boolean;

	/**
	 * Read-only. The views contained in this document.
	 * @const
	 * @type {Views} {@link Views} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly views:Views;

	/**
	 * Read-only. The visible bounds of the document, including stroke width of any objects in the illustration.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly visibleBounds:Number[];

	/**
	 * Read-only. The width of this document.
	 * @const
	 * @type {Number} double
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly width:Number;

	/**
	 * Brings the first window associated with the document to the front.
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	activate():void;

	/**
	 * Closes a document using specified save options.
	 * When you close a document, you should set your document reference to <b>null</b> to prevent your script from accidentally trying to access closed documents.
	 * @param {SaveOptions} [saveOptions] {@link SaveOptions}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	close(saveOptions?:SaveOptions):void;

	/**
	 * Exports the document to the specified file using one of the predefined export file formats. The appropriate file extension is automatically appended to the file name, except for Photoshop documents. For these, you must include the file extension (<b>.psd</b>) in the file specification.
	 * @param {File} exportFile {@link File} object
	 * @param {ExportType} exportFormat {@link ExportType}
	 * @param {ExportOptions} [options] {@link ExportOptions} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	exportFile(exportFile:File, exportFormat:ExportType, options?:ExportOptions):void;

	/**
	 * Exports the current PDF preset values to the file.
	 * @param {File} file {@link File} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	exportPDFPreset(file:File):void;

	/**
	 * Exports the current print preset values to the file.
	 * @param {File} file {@link File} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	exportPrintPreset(file:File):void;

	/**
	 * Saves datasets into an XML library. The datasets contain variables and their associated dynamic data.
	 * @param {File} fileSpec {@link File} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	exportVariables(fileSpec:File):void;

	/**
	 * Loads the character styles from the Illustrator file.
	 * @param {File} fileSpec {@link File} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	importCharacterStyles(fileSpec:File):void;

	/**
	 * Loads the paragraph styles from the Illustrator file.
	 * @param {File} fileSpec {@link File} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	importParagraphStyles(fileSpec:File):void;

	/**
	 * Loads all PDF presets from a file.
	 * @param {File} fileSpec {@link File} object
	 * @param {Boolean} [replacingPreset] {@link Boolean}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	importPDFPreset(fileSpec:File, replacingPreset?:Boolean):void;

	/**
	 * Loads the named print preset from the file.
	 * @param {String} printPreset {@link String}
	 * @param {File} fileSpec {@link File} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	importPrintPreset(printPreset:String, fileSpec:File):void;

	/**
	 * Imports a library containing datasets, variables, and their associated dynamic data. Importing variables overwrites existing variables and datasets.
	 * @param {File} fileSpec {@link File} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	importVariables(fileSpec:File):void;

	/**
	 * Prints the document.
	 * @param {PrintOptions} [options] {@link PrintOptions} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	print(options?:PrintOptions):void;

	/**
	 * Saves the document in it current location.
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	save():void;

	/**
	 * Saves the document in the specified file as an Illustrator, EPS, or PDF file.
	 * @param {File} saveIn {@link File} object
	 * @param {SaveOptions} options {@link SaveOptions} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	saveAs(saveIn:File, options?:SaveOptions):void;
}