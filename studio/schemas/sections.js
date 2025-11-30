// This schema intends to include all section objects

export const heroImage = {
  title: "Hero Image",
  name: "heroImage",
  type: "object",
  fields: [
    {
      title: "Hero Image | Desktop",
      name: "imageDesktop",
      type: "image",
      description:
        "Image should be 1920x826 pixels in WebP format. Use https://squoosh.app/",
      validation: (Rule) => Rule.required()
    },
    {
      title: "Hero Image | Mobile",
      name: "imageMobile",
      type: "image",
      description:
        "Image should be 639x841 pixels in WebP format. Use https://squoosh.app/",
      validation: (Rule) => Rule.required()
    },
    {
      title: "Image ALT Text",
      name: "altText",
      type: "string",
      description:
        "Used by Google Search. Use one text that better describe the image and the page that the image is used.",
      validation: (Rule) => Rule.required()
    }
  ],
  preview: {
    select: {
      title: "altText",
      media: "imageMobile"
    },
    prepare({ title, media }) {
      return {
        title: `Hero Image | ${title}`,
        media
      }
    }
  }
}

export const albumBanner = {
  title: "Album Banner",
  name: "albumBanner",
  type: "object",
  fields: [
    {
      title: "Album",
      name: "album",
      type: "reference",
      to: [{ type: "album" }],
      description: "Select the album that will be shown highlighted",
      validation: (Rule) => Rule.required()
    },
    {
      title: "Background Image | Desktop",
      name: "imageDesktop",
      type: "image",
      description:
        "Image should be 1920x907 pixels in WebP format. Use https://squoosh.app/",
      validation: (Rule) => Rule.required()
    },
    {
      title: "Background Image | Mobile",
      name: "imageMobile",
      type: "image",
      description:
        "Image should be 639x841 pixels in WebP format. Use https://squoosh.app/",
      validation: (Rule) => Rule.required()
    }
  ],
  preview: {
    select: {
      albumTitle: "album.albumTitle",
      media: "album.albumCover"
    },
    prepare({ albumTitle, media }) {
      return {
        title: `Album Banner | ${albumTitle}`,
        media
      }
    }
  }
}

export const trackList = {
  title: "Track List",
  name: "trackList",
  type: "object",
  fields: [
    {
      title: "Tracks",
      name: "tracks",
      type: "array",
      of: [
        { type: "soundcloudTrack" },
        { type: "spotifyTrack" },
        { type: "youtubeTrack" }
      ]
    }
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: "Track List"
      }
    }
  }
}

export const albumGroup = {
  title: "Album Group",
  name: "albumGroup",
  type: "object",
  fields: [
    {
      title: "Group Title",
      name: "title",
      type: "string",
      description:
        "Optional title displayed above this set of albums (e.g. 'Featured')."
    },
    {
      title: "Albums",
      name: "albums",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "album" }]
        }
      ],
      validation: (Rule) => Rule.required().min(1)
    }
  ],
  preview: {
    select: {
      title: "title",
      albums: "albums"
    },
    prepare({ title, albums }) {
      const totalAlbums = albums ? albums.length : 0
      return {
        title: title || "Album Group",
        subtitle:
          totalAlbums > 0
            ? `${totalAlbums} album${totalAlbums > 1 ? "s" : ""}`
            : "No albums"
      }
    }
  }
}

export const youtubeVideo = {
  title: "YouTube Video",
  name: "youtubeVideo",
  type: "object",
  fields: [
    {
      title: "Track ID",
      name: "trackID",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      title: "Start time (seconds)",
      name: "startTime",
      type: "number",
      description: "(Optional) The time that the video will start to play"
    },
    {
      title: "Bottom Title",
      name: "withTitle",
      type: "string",
      description:
        "(Optional) Usually used to add a title for Albums, below video)"
    }
  ],
  preview: {
    select: {
      trackID: "trackID"
    },
    prepare({ trackID }) {
      return {
        title: `YouTube Video | TrackID: ${trackID}`
      }
    }
  }
}

export const contentBody = {
  title: "Content Body",
  name: "contentBody",
  type: "object",
  fields: [
    {
      title: "Content",
      type: "array",
      name: "contents",
      of: [{ type: "block" }]
    }
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: "Content Body"
      }
    }
  }
}

export const textWithPhoto = {
  title: "Text with Photo",
  name: "textWithPhoto",
  type: "object",
  fields: [
    {
      title: "Content",
      type: "array",
      name: "content",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required()
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      description:
        "Image size may vary but must be in WebP format. Use https://squoosh.app/",
      validation: (Rule) => Rule.required()
    },
    {
      title: "Image ALT Text",
      name: "altText",
      type: "string",
      description:
        "Used by Google Search. Use one text that better describe the image and the page that the image is used.",
      validation: (Rule) => Rule.required()
    }
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: "Text with Photo"
      }
    }
  }
}

export const spotifyAlbum = {
  title: "Spotify Album",
  name: "spotifyAlbum",
  type: "object",
  fields: [
    {
      title: "Album ID",
      name: "albumID",
      type: "string",
      description: "The unique Spotify APP ID for the Album",
      validation: (Rule) => Rule.required()
    },
    {
      title: "Include Album cover?",
      name: "hasCover",
      type: "boolean",
      description:
        "(Optional) Include the album cover beside the Spotify embeded widget"
    }
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: "Spotify Album"
      }
    }
  }
}

export const albumHeroBanner = {
  title: "Album Hero Banner",
  name: "albumHeroBanner",
  type: "object",
  fields: [
    {
      title: "Description",
      name: "description",
      type: "text",
      description: "Simple a small description text here",
      validation: (Rule) => Rule.required()
    },
    {
      title: "Background Image | Desktop",
      name: "imageDesktop",
      type: "image",
      description:
        "Image should be 1920x762 pixels in WebP format. Use https://squoosh.app/",
      validation: (Rule) => Rule.required()
    },
    {
      title: "Background Image | Mobile",
      name: "imageMobile",
      type: "image",
      description:
        "Image should be 639x648 pixels in WebP format. Use https://squoosh.app/",
      validation: (Rule) => Rule.required()
    }
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: "Album Hero Banner"
      }
    }
  }
}

export const photoSlides = {
  title: "Photo Slides",
  name: "photoSlides",
  type: "object",
  fields: [
    {
      title: "Section height (px)",
      name: "sectionHeight",
      type: "number",
      description: "Height in pixels for the section on desktop.",
      validation: (Rule) => Rule.required().min(1)
    },
    {
      title: "Section height | Mobile (px)",
      name: "sectionHeightMobile",
      type: "number",
      description: "Optional mobile height in pixels. Falls back to desktop height."
    },
    {
      title: "Slides",
      name: "slides",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Image",
              name: "image",
              type: "image",
              validation: (Rule) => Rule.required()
            },
            {
              title: "ALT Text",
              name: "altText",
              type: "string",
              validation: (Rule) => Rule.required()
            }
          ]
        }
      ],
      validation: (Rule) => Rule.required().min(1)
    }
  ],
  preview: {
    select: {
      slides: "slides",
      sectionHeight: "sectionHeight"
    },
    prepare({ slides, sectionHeight }) {
      const count = slides?.length || 0
      return {
        title: "Photo Slides",
        subtitle: `${count} photo${count === 1 ? "" : "s"}${sectionHeight ? ` · ${sectionHeight}px` : ""}`
      }
    }
  }
}
