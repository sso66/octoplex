## OctoPlex SASS Guide
### The 7-1 (7 folders, 1 file) Pattern Architecture


#### 1. Abstract (or Utilities) 
	- Abstract (utilities) holds Sass tools, helper files, variables, mixins, functions and other config files. These files are meant to be just 
	helpers which don't ouput any CSS when compiled.
		
	
#### 2. Base
	- Base holds the boilerplate code for the project, including standard styles such as typographic rules, which are commonly used out the application.
	
	
#### 3. Layout
	- It contains all styles involved with the layout of the application, such as styles for main content, header, footer, and navigation.
	
	
#### 4. Modules (or Components)
	- Modules hold all of the styles for CSS selector components
	
	
#### 5. Pages (or Views)
	- Hold all of the styles for specific CSS selector containers.
	
	  
#### 6. Themes
	- Hold a particular application style for RWD desktop/tablet/mobile states, HiDPI images, and media queries.
	
	 
#### 7. Vendors
	- Contain all third party code from external libraries and frameworks: Animate, Bulma, FontAwesome and Normalize.
	
	
#### octoplex.sass (main) 
	- It only contains the imports of the project specific SASS files.

#### App.sass
	- It contains project or brand (e.g. Ocean Alexander) specific styles guide for feature components.

#### index.sass
	- It contains project agnostic style guides for site or architectural components
		 