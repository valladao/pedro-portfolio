export const soundcloudTrack = {
  title: "Soundcloud Track",
  name: "soundcloudTrack",
  type: "object",
  fields: [
    {
      title: "Track ID",
      name: "trackID",
      type: "string",
      validation: (Rule) => Rule.required()
    }
  ],
  preview: {
    select: {
      trackID: "trackID"
    },
    prepare({ trackID }) {
      return {
        title: `Soundcloud TrackID: ${trackID}`
      }
    }
  }
}

export const spotifyTrack = {
  title: "Spotify Track",
  name: "spotifyTrack",
  type: "object",
  fields: [
    {
      title: "Track ID",
      name: "trackID",
      type: "string",
      validation: (Rule) => Rule.required()
    }
  ],
  preview: {
    select: {
      trackID: "trackID"
    },
    prepare({ trackID }) {
      return {
        title: `Spotify TrackID: ${trackID}`
      }
    }
  }
}

export const youtubeTrack = {
  title: "YouTube Track",
  name: "youtubeTrack",
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
      type: "number"
    }
  ],
  preview: {
    select: {
      trackID: "trackID"
    },
    prepare({ trackID }) {
      return {
        title: `YouTube TrackID: ${trackID}`
      }
    }
  }
}
