function categorizeColor() {
    var color = prompt('Enter a color name:');
    color = color.toLowerCase();
      switch (color) {
      case 'yellow':
      case 'pink':
      case 'orange':
        return 'light color';
      case 'blue':
      case 'purple':
      case 'brown':
        return 'dark color';
      default:
        return 'Unknown color';
    }
  }
  
  var result = categorizeColor();
    console.log('The color is a ' + result + '.');
  