//
//  ViewController.h
//  Smartgarden
//
//  Created by Jörg Vanderhoeven on 05.07.21.
//

#import <UIKit/UIKit.h>
#import <Cordova/CDVViewController.h>

@interface ViewController : UIViewController
- (void)resetButtonTints;
- (void)setBottomButtonActive:(NSString*) item;

@property (weak, nonatomic) IBOutlet UIView *theView;
@property (weak, nonatomic) IBOutlet UINavigationItem *topNavigtion;
@property (weak, nonatomic) IBOutlet UIToolbar *bottomNavigation;
@property (strong, nonatomic) CDVViewController *viewController;
@end

