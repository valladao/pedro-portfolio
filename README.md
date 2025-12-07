Hi, my name is Manoel Valladao and I am web developer. This project is a professional portfolio website that I create to my son, Pedro Henrique Valladao. My son is a talent music composer and artist so we want too much the best way to promote him works and project.

With that idea in mind, as Pedro is not only musician, but also likes to draw and paint, since boy, we decided that he would design the website. With some Figma lessons, he could design the album pages and sections so my work was to transport that to the web.

My plan was too use the most modern front-end technogies and to focus on performance and acessabilitiy. Here I explain a little bit of what has been developed and how.

## Dynamic Page Sections

### Hero Image

![image](https://user-images.githubusercontent.com/527135/224485024-7848baf9-fdde-4eb6-8363-c4c3e68368e4.png)

<p align="center">
  <img src="https://user-images.githubusercontent.com/527135/224550432-6935bb53-8255-4993-a33c-a9b95a3ba277.png"
</p>

**Section schema:**

| Field Name           | Description                                                                                             |
| -------------------- | ------------------------------------------------------------------------------------------------------- |
| Hero Image - Desktop | Image should be 1920x826 pixels in WebP format. Use https://squoosh.app/                                |
| Hero Image - Mobile  | Image should be 639x672 pixels in WebP format. Use https://squoosh.app/                                 |
| Image ALT Text       | Used by Google Search. Use one text that better describe the image and the page that the image is used. |

---

### Album Banner

![image](https://user-images.githubusercontent.com/527135/224485147-ac0b1c50-3cd7-4a48-94d8-51a2677106a9.png)

<p align="center">
  <img src="https://user-images.githubusercontent.com/527135/224855565-dbb4d1c6-ff72-499b-bb53-c0021d405254.png"
</p>

**Section schema:**

| Field Name                 | Description                                                              |
| -------------------------- | ------------------------------------------------------------------------ |
| Album                      | Select the album that will be shown highlighted                          |
| Background Image - Desktop | Image should be 1920x907 pixels in WebP format. Use https://squoosh.app/ |
| Background Image - Mobile  | Image should be 639x841 pixels in WebP format. Use https://squoosh.app/  |

---

### Track List

![image](https://user-images.githubusercontent.com/527135/224485227-b89e0827-26db-440b-9ac9-38964864cc56.png)

<p align="center">
  <img src="https://user-images.githubusercontent.com/527135/224860400-02f5c694-b09b-47a1-b91f-db3a31973e26.png"
</p>

**Section schema -** You must add at least one of this three different types of tracks:

- Soundcloud Track
- Spotify Track
- YouTube Track

| Field Name           | Description                                                                            |
| -------------------- | -------------------------------------------------------------------------------------- |
| Title                | (Optional) Text shown in the top bar. If empty, the bar is hidden.                     |
| Description          | (Optional) Rich text shown between the title bar and the tracks.                       |
| Track ID             | The unique APP ID for the track                                                        |
| Start time (seconds) | (Only for YouTube) The time that the video will start to play                          |

**Layout behavior:**

- On desktop, 3 columns are used only when there are 3+ tracks; fewer tracks stay centered.
- On tablet, 2 columns remain.
- Each track card keeps its original embed size with a max width of 412px.

---

### Item Group

Flexible list that accepts **albums** or **projects** (references). It keeps the Album List grid and can show project descriptions.

<img width="1881" height="742" alt="image" src="https://github.com/user-attachments/assets/f9ca257e-fe0f-44c9-a26f-d59d53aa3239" />

<img width="1878" height="622" alt="image" src="https://github.com/user-attachments/assets/c8d085ab-4070-4678-b883-022ac61b3223" />

<p align="center">
  <img width="384" height="842" alt="image" src="https://github.com/user-attachments/assets/610cdf18-f548-40aa-93d6-49733306c237" />
  <img width="386" height="845" alt="image" src="https://github.com/user-attachments/assets/fe3f6ebd-79d6-415b-b5a9-7085b4fc42a4" />
</p>

**Section schema:**

| Field Name        | Description                                                             |
| ----------------- | ----------------------------------------------------------------------- |
| Group Title       | (Optional) Title displayed above the group.                             |
| Items             | Array of references (`album` or `project`).                             |
| Show description? | (Optional) Displays the project plain-text description under the title. |

---

### YouTube Video

![image](https://user-images.githubusercontent.com/527135/224543843-d72d5531-bd85-48e6-b336-f6e5decb07df.png)

<p align="center">
  <img src="https://user-images.githubusercontent.com/527135/226568312-bbcb23b9-385c-43a5-b408-11b76815cbcb.png"
</p>

**Section schema:**

| Field Name           | Description                                                    |
| -------------------- | -------------------------------------------------------------- |
| Track ID             | The unique APP ID for the track                                |
| Start time (seconds) | (Optional) The time that the video will start to play          |
| Bottom Title         | (Optional) Usually used to add a title for Albums, below video |

---

### Content Body

![image](https://user-images.githubusercontent.com/527135/224543963-b7eca12a-622d-4f0a-83e9-113ba3f273fe.png)

<p align="center">
  <img src="https://user-images.githubusercontent.com/527135/226585141-6f3a307f-257c-477e-afa1-a6c752759cf3.png"
</p>

**Section schema:**

| Field Name | Description                   |
| ---------- | ----------------------------- |
| Content    | Simple add here the rich text |

---

### Text with Photo

![image](https://user-images.githubusercontent.com/527135/224544012-a137adaa-b35f-44ae-9569-f670ed0d3da6.png)

<p align="center">
  <img src="https://user-images.githubusercontent.com/527135/226587722-fede67d9-8e99-46e7-a90b-5e3fe7cdfdac.png"
</p>

**Section schema:**

| Field Name     | Description                                                                                             |
| -------------- | ------------------------------------------------------------------------------------------------------- |
| Content        | Simple add here the rich text                                                                           |
| Image          | Image size may vary but must be in WebP format. Use https://squoosh.app/                                |
| Image ALT Text | Used by Google Search. Use one text that better describe the image and the page that the image is used. |

---

### Spotify Album

![image](https://user-images.githubusercontent.com/527135/224544040-ffa4a7d8-6635-481c-b941-1c6936e0f458.png)

<p align="center">
  <img src="https://user-images.githubusercontent.com/527135/226595812-764670a3-8197-4668-8e3d-11bc17510a5c.png"
</p>

**Section schema:**

| Field Name           | Description                                                          |
| -------------------- | -------------------------------------------------------------------- |
| Album ID             | The unique Spotify APP ID for the Album                              |
| Include Album cover? | (Optional) Include the album cover beside the Spotify embeded widget |

---

### Album Hero Banner

![image](https://user-images.githubusercontent.com/527135/224544087-e54c432e-f8ac-497d-9740-546eebb40eea.png)

<p align="center">
  <img src="https://user-images.githubusercontent.com/527135/226599453-cf64d11a-c1c5-4bcb-8416-5a83400d1e75.png"
</p>

**Section schema:**

| Field Name                 | Description                                                              |
| -------------------------- | ------------------------------------------------------------------------ |
| Description                | Simple a small description text here                                     |
| Background Image - Desktop | Image should be 1920x762 pixels in WebP format. Use https://squoosh.app/ |
| Background Image - Mobile  | Image should be 639x648 pixels in WebP format. Use https://squoosh.app/  |

---

### Photo Slides

- 3 slides per view on desktop with navigation arrows; 1 slide per view on mobile with pagination bullets.
- Images use the section height (desktop/mobile) and cover the available space.

**Desktop version:**
<img width="1881" height="536" alt="image" src="https://github.com/user-attachments/assets/eae63221-283f-4fc4-8181-3e432f8fbe3c" />

**Mobile version:**
<p align="center">
  <img width="367" height="284" alt="image" src="https://github.com/user-attachments/assets/b511d41f-e0c4-4450-a9a2-d614dc938228" />
</p>

**Behavior:**

**Section schema:**

| Field Name              | Description                                              |
| ----------------------- | -------------------------------------------------------- |
| Section height (px)     | Height in pixels for the section on desktop              |
| Section height (Mobile) | Optional mobile height in pixels (falls back to desktop) |
| Slides                  | Array of images                                          |
| Image                   | Image asset (recommended to upload optimized WebP)       |
| ALT Text                | Required alt text for the image                          |
