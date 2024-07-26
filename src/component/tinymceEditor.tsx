import React, { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";

const TinyMCEEditorPage: React.FC = () => {
  const [content, setContent] = useState<string>("");
  const [initialContent, setInitialContent] = useState<string>("");

  useEffect(() => {
    // Initial content for the editor
    const initialContent = `
      
      <h2 style="text-align: center;">Welcome to the TinyMCE editor demo!</h2>
      <h2>Finally ...</h2>

      <p>
        Don't forget to check out our other product <a href="http://www.plupload.com" target="_blank">Plupload</a>, your ultimate upload solution featuring HTML5 upload support.
      </p>
      <p>
        Thanks for supporting TinyMCE! We hope it helps you and your users create great content.<br>All the best from the TinyMCE team.
      </p>
    `;
    setContent(initialContent);
    setInitialContent(initialContent);
  }, []);

  const handleEditorChange = (content: string, editor: TinyMCEEditor) => {
    setContent(content);
    console.log("Editor content:", content);
    console.log("Editor instance:", editor);
  };

  const handleSave = () => {
    // Handle save logic, e.g., sending content to server or saving locally
    console.log("Saving content:", content);
    // Assuming you have a save function or API call
    // saveContent(content);
  };

  const handleCancel = () => {
    // Reset content to initial state
    setContent(initialContent);
  };

  return (
    <div className="mx-auto max-w-screen-lg bg-white p-4 shadow-md shadow-slate-500 rounded-lg ">
      <Editor
        initialValue={content}
        apiKey="it6welyshxwm14bortlf5rwdf6k5j038scbqdh4fc83g19qi" // Replace with your API key
        init={{
          height: "50vh", // Set height using viewport height
          menubar: false,
          plugins:
            "preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link math media mediaembed codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker editimage help formatpainter permanentpen pageembed charmap tinycomments mentions quickbars linkchecker emoticons advtable footnotes mergetags autocorrect typography advtemplate markdown revisionhistory",
          toolbar:
            "undo redo | revisionhistory | aidialog aishortcuts | blocks fontsizeinput | bold italic | align numlist bullist | link image | table math media pageembed | lineheight  outdent indent | strikethrough forecolor backcolor formatpainter removeformat | charmap emoticons checklist | code fullscreen preview | save print | pagebreak anchor codesample footnotes mergetags | addtemplate inserttemplate | addcomment showcomments | ltr rtl casechange | spellcheckdialog a11ycheck", // Note: if a toolbar item requires a plugin, the item will not present in the toolbar if the plugin is not also loaded.
          autosave_ask_before_unload: true,
          autosave_interval: "30s",
          autosave_prefix: "{path}{query}-{id}-",
          autosave_restore_when_empty: false,
          autosave_retention: "2m",
          image_advtab: true,
          typography_rules: [
            "common/punctuation/quote",
            "en-US/dash/main",
            "common/nbsp/afterParagraphMark",
            "common/nbsp/afterSectionMark",
            "common/nbsp/afterShortWord",
            "common/nbsp/beforeShortLastNumber",
            "common/nbsp/beforeShortLastWord",
            "common/nbsp/dpi",
            "common/punctuation/apostrophe",
            "common/space/delBeforePunctuation",
            "common/space/afterComma",
            "common/space/afterColon",
            "common/space/afterExclamationMark",
            "common/space/afterQuestionMark",
            "common/space/afterSemicolon",
            "common/space/beforeBracket",
            "common/space/bracket",
            "common/space/delBeforeDot",
            "common/space/squareBracket",
            "common/number/mathSigns",
            "common/number/times",
            "common/number/fraction",
            "common/symbols/arrow",
            "common/symbols/cf",
            "common/symbols/copy",
            "common/punctuation/delDoublePunctuation",
            "common/punctuation/hellip",
          ],
          typography_ignore: ["code"],
          advtemplate_list: () => {
            return Promise.resolve([
              {
                id: "1",
                title: "Resolving tickets",
                content:
                  "<p>As we have not heard back from you in over a week, we have gone ahead and resolved your ticket.</p>",
              },
              {
                id: "2",
                title: "Quick replies",
                items: [
                  {
                    id: "3",
                    title: "Message received",
                    content:
                      "<p>Just a quick note to say we have received your message, and will get back to you within 48 hours.</p>",
                  },
                  {
                    id: "4",
                    title: "Progress update",
                    content:
                      "</p>Just a quick note to let you know we are still working on your case</p>",
                  },
                ],
              },
            ]);
          },
          link_list: [
            { title: "My page 1", value: "https://www.tiny.cloud" },
            { title: "My page 2", value: "http://www.moxiecode.com" },
          ],
          image_list: [
            { title: "My page 1", value: "https://www.tiny.cloud" },
            { title: "My page 2", value: "http://www.moxiecode.com" },
          ],
          image_class_list: [
            { title: "None", value: "" },
            { title: "Some class", value: "class-name" },
          ],
          importcss_append: true,

          image_caption: true,
          quickbars_selection_toolbar:
            "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
          noneditable_class: "mceNonEditable",
          toolbar_mode: "sliding",
          spellchecker_ignore_list: [
            "Ephox",
            "Moxiecode",
            "tinymce",
            "TinyMCE",
          ],
          tinycomments_mode: "embedded",
          content_style: ".mymention{ color: gray; }",
          contextmenu: "link image editimage table configurepermanentpen",
          a11y_advanced_options: true,

          className: " md:w-3/4 lg:w-2/3 mx-auto p-4  scroll-hide h-96",

        }}
        onEditorChange={handleEditorChange}
      />
      <div className="flex justify-end m-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TinyMCEEditorPage;





// import React, { useState, useEffect } from "react";
// import { Editor } from "@tinymce/tinymce-react";
// import { Editor as TinyMCEEditor } from "tinymce";

// const TinyMCEEditorPage: React.FC = () => {
//   const [content, setContent] = useState<string>("");

//   useEffect(() => {
//     // Initial content for the editor
//     const initialContent = `
//       <p><img style="display: block; margin-left: auto; margin-right: auto;" title="Tiny Logo" src="https://www.tiny.cloud/docs/images/logos/android-chrome-256x256.png" alt="TinyMCE Logo" width="128" height="128"></p>
//       <h2 style="text-align: center;">Welcome to the TinyMCE editor demo!</h2>
//       <h2>Finally ...</h2>

//       <p>
//         Don't forget to check out our other product <a href="http://www.plupload.com" target="_blank">Plupload</a>, your ultimate upload solution featuring HTML5 upload support.
//       </p>
//       <p>
//         Thanks for supporting TinyMCE! We hope it helps you and your users create great content.<br>All the best from the TinyMCE team.
//       </p>
//     `;
//     setContent(initialContent);
//   }, []);

//   const handleEditorChange = (content: string, editor: TinyMCEEditor) => {
//     setContent(content);
//     console.log("Editor content:", content);
//     console.log("Editor instance:", editor);
//   };

//   return (
//     <div className="mx-auto max-w-screen-lg">
//       <Editor
//         initialValue={content}
//         apiKey="your_api_key_here" // Replace with your API key
//         init={{
//           height: "80vh", // Set height using viewport height
//           menubar: false,
//           plugins: [
//             "advlist",
//             "autolink",
//             "lists",
//             "link",
//             "image",
//             "charmap",
//             "preview",
//             "anchor",
//             "searchreplace",
//             "visualblocks",
//             "code",
//             "fullscreen",
//             "insertdatetime",
//             "media",
//             "table",
//             "help",
//             "wordcount",
//             "textcolor", // Plugin for text color
//           ],
//           toolbar:
//             "undo redo | formatselect | bold italic backcolor | forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | image media | help",
//           content_style:
//             "body { font-family: Helvetica, Arial, sans-serif; font-size: 16px }",
//           file_picker_types: "image media", // Allow file picker for images and media
//           mobile: {
//             theme: "silver", // Set a lighter theme for mobile
//             plugins: [
//               "advlist",
//               "autolink",
//               "lists",
//               "link",
//               "image",
//               "charmap",
//               "preview",
//               "anchor",
//               "searchreplace",
//               "visualblocks",
//               "code",
//               "fullscreen",
//               "insertdatetime",
//               "media",
//               "table",
//               "help",
//               "wordcount",
//               "textcolor",
//             ],
//             toolbar:
//               "undo redo | formatselect | bold italic backcolor | forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | image media | help",
//             content_style:
//               "body { font-family: Helvetica, Arial, sans-serif; font-size: 14px }", // Adjust font size for smaller screens
//           },
//         }}
//         onEditorChange={handleEditorChange}
//       />
//     </div>
//   );
// };

// export default TinyMCEEditorPage;
