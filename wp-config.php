<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '5IxGRKZX{^peyTRsWI:CKadg9R4P8Di4f#jsT(c?Iegcc{y0rF-I+Xt6vVwpWjH+');
define('SECURE_AUTH_KEY',  'T`QZQgjn-qe*{3D+`m_MV3`N7dt~wk SN~f1X%n!g:z[;M|g91QMp|/BQ#s-q+UV');
define('LOGGED_IN_KEY',    '|ll-R!@ZU7)%2{dmvO^I!j{_lx =2DlpBG8hjxtO?ix-G2W&Y&g}T3#g$DLwgE4?');
define('NONCE_KEY',        'J} {]Su8bt*=WM&%8BS-.NT$`)J@PI/}HU%ws`I`02l?.e45AbsqvO=C?I*CNskO');
define('AUTH_SALT',        '@y|vg|?GG+I|e,?9?I#I;Lp$JZs|&lB;WUV/re;A>}IAt#(JAIlaf5|kh!}jFG1F');
define('SECURE_AUTH_SALT', 'iGh-9}l>^M25Hox(:^|?9!E?@}XH~?jnv*6byUTil^IK,3 vl)fID?T_Z8&TymPb');
define('LOGGED_IN_SALT',   'DH]T-8bvH:<hf47Bze(<D)fJ+X;uX>-N8rx6yAm<ndr6{^c^qi&VO|0,g}YqF]N7');
define('NONCE_SALT',       '}+FU|]Xb+8]>#ts<? ;`|+-y5WEfd@i:PpIk%P&U6n+H!Sg!:GvgZ:A%v%WbRuQ|');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
