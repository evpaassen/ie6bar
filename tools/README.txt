==================
 THE BUILD SCRIPT
==================

In this directory, you'll find a build script, which can build the IE6Bar
package from it's source. The source should be located in the folder '../src',
relative to the folder of the build script.

The script is written in PHP, so you'll need to have PHP installed to
run it. You can then run the script from the command line using the following
commands.


=======
 USAGE
=======


php ie6bar.php build

   Builds the IE6Bar package and saves the output in the folder '../bin',
   relative to the folder of the build script.



php ie6bar.php clean

   Removes the entire folder '../bin', relative to the folder of the build
   script.


==========
 LIBARIES
==========
The build script uses to libraries to minify css and javascript. Those libraries
are called CssMin and JSMin+, respectively. Many thanks to the creators of these
libraries!

  CSSMIN
  By Joe Scylla <joe.scylla@gmail.com>
  http://code.google.com/p/cssmin/
  
  JSMIN+
  By Tino Zijdel <crisp@tweakers.net>
  http://crisp.tweakblogs.net/blog/1856/jsmin+-version-13.html