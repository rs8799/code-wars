function findNeedle(haystack) {
  let finder = (wordNeedle) => wordNeedle=="needle";

  let position = haystack.findIndex(finder)
  return `found the needle at position ${position}`
}


findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])