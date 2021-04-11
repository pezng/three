
  /**
   * Parses text file string of tle into groups.
   * @return {string[][]} Like [['tle line 1', 'tle line 2'], ...]
   */
   export const parseTle = (tleString: string): string[][] => {
    // remove last newline so that we can properly split all the lines
    var lines: string[] = tleString.replace(/\r?\n$/g, '').split(/\r?\n/);

    return lines.reduce((acc: any, cur: any, index) => {
      if (index % 2 === 0) acc.push([]);
      acc[acc.length - 1].push(cur);
      return acc;
    }, []);
  }