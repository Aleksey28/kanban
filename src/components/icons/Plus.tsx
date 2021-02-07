import * as React from "react"

function Plus({...props}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 349.03 349.031"
      {...props}
    >
      <path d="M349.03 141.226v66.579a9.078 9.078 0 01-9.079 9.079H216.884v123.067a9.077 9.077 0 01-9.079 9.079h-66.579c-5.009 0-9.079-4.061-9.079-9.079V216.884H9.079A9.08 9.08 0 010 207.805v-66.579a9.079 9.079 0 019.079-9.079h123.068V9.079c0-5.018 4.069-9.079 9.079-9.079h66.579a9.078 9.078 0 019.079 9.079v123.068h123.067a9.077 9.077 0 019.079 9.079z" />
    </svg>
  )
}

export default Plus
