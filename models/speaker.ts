
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.0.0'
 * Timestamp: Wed Mar 06 2024 10:26:12 GMT+0500 (Pakistan Standard Time)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Speaker extends ContentItem {
    public name!: Elements.TextElement;
    public company!: Elements.TextElement;
    public designation!: Elements.TextElement;
    public profile!: Elements.RichTextElement;
    public image!: Elements.AssetsElement;
    public highlevel!: Elements.NumberElement;
    public itemorder!: Elements.NumberElement;
}