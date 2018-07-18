/**
 * A contiguous block of text as specified by a text range. A story can contain one or more text frames; if there is more than one, the multiple text frames are linked together to form a single story.
 *
 * @since CS2
 * @version CS5
 *
 * <b>Properties</b>
 * ･ {@link characters}
 * ･ {@link insertionPoints}
 * ･ {@link length}
 * ･ {@link lines}
 * ･ {@link paragraphs}
 * ･ {@link parent}
 * ･ {@link textFrames}
 * ･ {@link textRange}
 * ･ {@link textRanges}
 * ･ {@link textSelection}
 * ･ {@link typename}
 * ･ {@link words}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Threading text frames into stories
 *     // Creates 1 story that flows through 2 text frames and another story that
 *     // is displayed in a 3rd text frame
 *
 *     // Create a new document and add 2 area TextFrames
 *     var docRef = documents.add();
 *     var itemRef1 = docRef.pathItems.rectangle(600, 200, 50, 30);
 *     var textRef1 = docRef.textFrames.areaText(itemRef1);
 *     textRef1.selected = true;
 *
 *     // create 2nd text frame and link it the first
 *     var itemRef2 = docRef.pathItems.rectangle(550, 300, 50, 200);
 *     var textRef2 = docRef.textFrames.areaText(itemRef2, TextOrientation.HORIZONTAL, textRef1);
 *     textRef2.selected = true;
 *
 *     // Add enough text to the 1st TextFrame to
 *     // cause it to flow to the 2nd TextFrame.
 *     textRef1.contents = "This is two text frames linked together as one story";
 *     redraw();
 *
 *     // Create a 3rd text frame and count the stories
 *     var textRef3 = docRef.textFrames.add();
 *     textRef3.contents = "Each unlinked textFrame adds a new story."
 *     textRef3.top = 650;
 *     textRef3.left = 200;
 *     redraw();
 */
declare class Story
{
	/**
	 * Read-only. All the characters in this story.
	 * @const
	 * @type {Characters|TextRange[]} {@link Characters} collection object
	 * @see {@link Story}
	 * @since CS2
	 * @version CS2
	 */
	readonly characters:Characters|TextRange[];

	/**
	 * Read-only. All the insertion points in this story.
	 * @const
	 * @type {InsertionPoints|InsertionPoint[]} {@link InsertionPoints} collection object
	 * @see {@link Story}
	 * @since CS2
	 * @version CS2
	 */
	readonly insertionPoints:InsertionPoints|InsertionPoint[];

	/**
	 * Read-only. The number of characters in the story.
	 * @const
	 * @type {Number} long
	 * @see {@link Story}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. All the lines in this story.
	 * @const
	 * @type {Lines|TextRange[]} {@link Lines} collection object
	 * @see {@link Story}
	 * @since CS2
	 * @version CS2
	 */
	readonly lines:Lines;

	/**
	 * Read-only. All the paragraphs in this story.
	 * @const
	 * @type {Paragraphs|TextRange[]} {@link Paragraphs} collection object
	 * @see {@link Story}
	 * @since CS2
	 * @version CS2
	 */
	readonly paragraphs:Paragraphs|TextRange[];

	/**
	 * Read-only. The object’s container.
	 * @const
	 * @type {Object}
	 * @see {@link Story}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The text frame items in this story.
	 * @const
	 * @type {TextFrameItems|TextFrameItem[]} {@link TextFrameItems} collection object
	 * @see {@link Story}
	 * @since CS2
	 * @version CS5
	 */
	readonly textFrames:TextFrameItems|TextFrameItem[];

	/**
	 * Read-only. The text range of the story.
	 * @const
	 * @type {TextRange} {@link TextRange} object
	 * @see {@link Story}
	 * @since CS2
	 * @version CS2
	 */
	readonly textRange:TextRange;

	/**
	 * Read-only. All the text ranges in the story.
	 * @const
	 * @type {TextRanges|TextRange[]} {@link TextRanges} collection object
	 * @see {@link Story}
	 * @since CS2
	 * @version CS2
	 */
	readonly textRanges:TextRanges|TextRange[];

	/**
	 * Read-only. The selected text ranges in the story.
	 * @const
	 * @type {TextRange[]} array of {@link TextRange} objects
	 * @see {@link Story}
	 * @since CS2
	 * @version CS2
	 */
	readonly textSelection:TextRange[];

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link Story}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Read-only. All the words in the story.
	 * @const
	 * @type {Words|TextRange[]} {@link Words} collection object
	 * @see {@link Story}
	 * @since CS2
	 * @version CS2
	 */
	readonly words:Words|TextRange[];
}