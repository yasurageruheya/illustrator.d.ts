/**
 * A {@link TracingObject}, which associates source raster art item with a vector-art plug-in group created by tracing. Scripts can initiate tracing using {@link PlacedItem#trace} or {@link RasterItem#trace}. The resulting {@link PluginItem} object represents the vector art group, and has this object in its {@link tracing} property.
 * A script can force the tracing operation by calling the application’s {@link Application#redraw} method. The operation is asynchronous, so a script should call {@link Application#redraw} after creating the {@link TracingObject}, but before accessing its properties or expanding the tracing to convert it to an art item group.
 * The read-only properties that describe the tracing result have valid values only after the first tracing operation completes. A value of 0 indicates that the operation has not yet been completed.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link anchorCount}
 * ･ {@link areaCount}
 * ･ {@link imageResolution}
 * ･ {@link parent}
 * ･ {@link pathCount}
 * ･ {@link sourceArt}
 * ･ {@link tracingOptions}
 * ･ {@link typename}
 * ･ {@link usedColorCount}
 *
 * <b>Methods</b>
 * ･ {@link expandTracing}
 * ･ {@link releaseTracing}
 */
declare class TracingObject
{
	/**
	 * Read-only. The number of anchors in the tracing result.
	 * @const
	 * @type {Number} long
	 * @see {@link TracingObject}
	 * @since CS2
	 * @version CS2
	 */
	readonly anchorCount:Number;

	/**
	 * Read-only. The number of areas in the tracing result.
	 * @const
	 * @type {Number} long
	 * @see {@link TracingObject}
	 * @since CS2
	 * @version CS2
	 */
	readonly areaCount:Number;

	/**
	 * Read-only. The resolution of the source image in pixels per inch.
	 * @const
	 * @type {Number} real
	 * @see {@link TracingObject}
	 * @since CS2
	 * @version CS2
	 */
	readonly imageResolution:Number;

	/**
	 * Read-only. The object’s container.
	 * @const
	 * @type {Object}
	 * @see {@link TracingObject}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The number of paths in the tracing result.
	 * @const
	 * @type {Number} long
	 * @see {@link TracingObject}
	 * @since CS2
	 * @version CS2
	 */
	readonly pathCount:Number;

	/**
	 * The raster art used to create the associated vector art plug-in group.
	 * @type {PlacedItem|RasterItem} {@link PlacedItem} object or {@link RasterItem} object
	 * @see {@link TracingObject}
	 * @since CS2
	 * @version CS2
	 */
	sourceArt:PlacedItem|RasterItem;

	/**
	 * The options used to convert the raster artwork to vector art.
	 * @type {TracingOptions} {@link TracingOptions} object
	 * @see {@link TracingObject}
	 * @since CS2
	 * @version CS2
	 */
	tracingOptions:TracingOptions;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link TracingObject}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Read-only. The number of colors used in the tracing result.
	 * @const
	 * @type {Number} long
	 * @see {@link TracingObject}
	 * @since CS2
	 * @version CS2
	 */
	readonly usedColorCount:Number;

	/**
	 * Converts the vector art into a new group item. The new {@link GroupItem} object replaces the {@link PluginItem} object in the document. By default, <b>viewed</b> is <b>false</b>, and the new group contains only the tracing result (the {@link filled} or {@link stroked} paths). If <b>viewed</b> is <b>true</b>, the new group retains additional information that was specified for the viewing mode, such as outlines and overlays.
	 * Deletes this object and its associated {@link PluginItem} object. Any group-level attributes that were applied to the plug-in item are applied to the top level of the new group item.
	 * @param {Boolean} [viewed] {@link Boolean} <b>viewed</b> is <b>false</b>, and the new group contains only the tracing result (the {@link filled} or {@link stroked} paths). If <b>viewed</b> is <b>true</b>, the new group retains additional information that was specified for the viewing mode, such as outlines and overlays.
	 * @return {GroupItem} {@link GroupItem} object
	 * @see {@link TracingObject}
	 * @since CS2
	 * @version CS2
	 */
	expandTracing(viewed?:Boolean):GroupItem;

	/**
	 * Reverts the artwork in the document to the original source raster art and removes the traced vector art. Returns the original object used to create the tracing, and deletes this object and its associated {@link PluginItem} object.
	 * @return {PlacedItem | RasterItem} {@link PlacedItem} object or {@link RasterItem} object
	 * @see {@link TracingObject}
	 * @since CS2
	 * @version CS2
	 */
	releaseTracing():PlacedItem|RasterItem;
}