
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.0.0'
 * Timestamp: Mon Sep 09 2024 09:41:14 GMT+0400 (Gulf Standard Time)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Startuppartnersitem extends ContentItem {
    public name!: Elements.TextElement;
    public shortContent!: Elements.TextElement;
    public content!: Elements.RichTextElement;
    public representativeEmail!: Elements.TextElement;
    public websiteLink!: Elements.TextElement;
    public image!: Elements.AssetsElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'short_content') {
                    return 'shortContent';
                }
                if (elementName === 'representative_email') {
                    return 'representativeEmail';
                }
                if (elementName === 'website_link') {
                    return 'websiteLink';
                }
                return elementName;
            })
        });
    }
}
