// This schema intends to include all section objects

export const heroImage = {
  title: "Hero Image",
  name: "heroImage",
  type: "object",
  fields: [
    {
      title: "Hero Image | Desktop",
      name: "imageDesktop",
      type: "image"
    },
    {
      title: "Hero Image | Mobile",
      name: "imageMobile",
      type: "image"
    },
    {
      title: "Image ALT Text",
      name: "altText",
      type: "string"
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
      to: [{ type: "album" }]
    },
    {
      title: "Background Image | Desktop",
      name: "imageDesktop",
      type: "image"
    },
    {
      title: "Background Image | Mobile",
      name: "imageMobile",
      type: "image"
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

export const albumList = {
  title: "Album List",
  name: "albumList",
  type: "object",
  fields: [
    {
      title: "Selected Albuns",
      name: "selectedAlbuns",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [{ title: "All Albuns", value: "all" }]
      }
    }
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: "Album List"
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
      type: "string"
    },
    {
      title: "Start time (seconds)",
      name: "startTime",
      type: "number"
    },
    {
      title: "Title Below (usually used for Albums)",
      name: "withTitle",
      type: "string"
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
      of: [{ type: "block" }]
    },
    {
      title: "Image",
      name: "image",
      type: "image"
    },
    {
      title: "Image ALT Text",
      name: "altText",
      type: "string"
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
      type: "string"
    },
    {
      title: "Include Album cover?",
      name: "hasCover",
      type: "boolean"
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
      type: "text"
    },
    {
      title: "Background Image | Desktop",
      name: "imageDesktop",
      type: "image"
    },
    {
      title: "Background Image | Mobile",
      name: "imageMobile",
      type: "image"
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
